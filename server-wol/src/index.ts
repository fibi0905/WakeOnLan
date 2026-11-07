import express from "express";
import cors from "cors";
import dgram from "dgram";
import fs from "fs";
import path from "path";
import { execSync } from 'child_process';
import * as net from 'net';
import e from "express";

const app = express();
app.use(cors());
app.use(express.json());

// ── File JSON ────────────────────────────────────────────────
const DATA_PATH = path.join(__dirname, "../data/pc.json");

if (!fs.existsSync(path.dirname(DATA_PATH))) {
  fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
}
if (!fs.existsSync(DATA_PATH)) {
  fs.writeFileSync(DATA_PATH, "[]", "utf-8");
}

// ── Tipi ────────────────────────────────────────────────────
type Pc = { nome: string; mac: string; };

const readPcs  = (): Pc[] => JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
const writePcs = (pcs: Pc[]) =>
  fs.writeFileSync(DATA_PATH, JSON.stringify(pcs, null, 2), "utf-8");

// ── GET /pcs — lista tutti i PC ──────────────────────────────
app.get("/pcs", (req, res) => {
  res.json(readPcs());
});

// ── POST /pcs — aggiunge un PC ──────────────────────────────
app.post("/pcs", (req, res) => {
  const { nome, mac } = req.body;
  if (!nome || !mac)
    return res.status(400).json({ error: "nome e mac sono obbligatori" });

  const pcs = readPcs();
  if (pcs.find(p => p.nome === nome))
    return res.status(409).json({ error: "Nome già esistente" });

  pcs.push({ nome, mac });
  writePcs(pcs);
  res.status(201).json({ nome, mac });
});

// ── DELETE /pcs/:nome — elimina un PC ───────────────────────
app.delete("/pcs/:nome", (req, res) => {
  const pcs = readPcs();
  const filtrati = pcs.filter(p => p.nome !== req.params.nome);
  if (filtrati.length === pcs.length)
    return res.status(404).json({ error: "PC non trovato" });

  writePcs(filtrati);
  res.json({ success: true });
});

// ── POST /wol — invia magic packet ──────────────────────────
function sendWakeOnLan(mac: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const macClean = mac.replace(/[:\-]/g, '').toUpperCase();
    if (macClean.length !== 12) return reject(new Error("MAC non valido"));

    const macBytes = Buffer.from(macClean, "hex");
    const packet   = Buffer.alloc(102);
    packet.fill(0xff, 0, 6);
    for (let i = 1; i <= 16; i++) macBytes.copy(packet, i * 6);

    const socket = dgram.createSocket("udp4");
    socket.bind(() => {
      socket.setBroadcast(true);
      socket.send(packet, 0, packet.length, 9, "255.255.255.255",
        (err) => { socket.close(); err ? reject(err) : resolve(); });
    });
  });
}


app.post("/wol", async (req, res) =>{
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "nome obbligatorio" });  
  const pcs = readPcs();

  const pc = pcs.find(p => p.nome === name)

  if(pc){
    try {
      await sendWakeOnLan(pc.mac);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false, error: String(err) });
    }
  }
  else{
    return res.status(400).json({ error: "nome non esitente" });
  }


});

// ── GET IP da MAC ────────────────────────────────────────────
function getIp(mac: string): string | null {
    try {
        const macNormalized = mac.replace(/[:\-]/g, '').toLowerCase();
        const content = fs.readFileSync('/proc/net/arp', 'utf-8');

        for (const line of content.split('\n').slice(1)) {
            const parts = line.trim().split(/\s+/);
            if (parts.length < 4) continue;

            const lineMac = parts[3].replace(/:/g, '').toLowerCase();
            if (lineMac === macNormalized) return parts[0];
        }

        return null;
    } catch (error) {
        console.error("Errore in getIp:", error);
        return null;
    }
}

// ── Invia messaggio TCP ──────────────────────────────────────
function sendMsg(ip: string, port: number, msg: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const client = new net.Socket();

        client.setTimeout(3000);

        client.connect(port, ip, () => {
            client.write(msg, (err) => {
                if (err) return reject(err);
                client.end(() => resolve());
            });
        });

        client.on('error', (err) => {
            reject(err);
        });

        client.on('timeout', () => {
            client.destroy();
            reject(new Error('Timeout'));
        });
    });
}

// ── POST /down — spegni PC ───────────────────────────────────

app.post("/down", async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "nome obbligatorio" });  
  const pcs = readPcs();

  const pc = pcs.find(p => p.nome === name)

  if(pc){
    const macClear = pc.mac.toLowerCase().replace(/[:\-]/g, ':');
    const ip = getIp(macClear);
    if (ip != null) {
      try {
        console.log(`ip: ${ip}\nMac: ${pc.mac}`);
        await sendMsg(ip, 4040, 'POWEROFF\n');
        res.json({ success: true });
      } catch (err) {
        console.log("Invio del messaggio non riuscito");
        res.status(510).json({ success: false, error: String(err) });
      }
    }
    else {
      res.status(500).json({ success: false, error: 'IP non trovato' });
    }

  }
  else{
    return res.status(400).json({ error: "nome non esitente" });
  }


});


app.post("/log", (req, res) => {
  const {pass} = req.body;

  try{
    const passIn = fs.readFileSync('/root/wol-backend/data/pass.txt', 'utf-8').trim();
    if(passIn === pass){
      res.status(200).json({ success:true });
    }
    else{
      res.status(200).json({ success:false });
      
    }

  }catch (err){
    res.status(500).json({ success: false, error: 'Errore nella lettura' });
  }

});


app.listen(3000, () =>
  console.log("Backend WOL in ascolto sulla porta 3000"));