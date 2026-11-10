<div align="center">

# 📘 How To Install

</div>

<a id="indice"></a>

## 🧭 Indice

- [📋 Requisiti](#requisiti)
- [🪟 Installazione su Windows](#windows)
  - [☕ 1. Installare Java](#java)
  - [📥 2. Scaricare il progetto](#progetto)
  - [🗓️ 3. Configurare l'Utilità di pianificazione](#pianificazione)
    - [Attività 1 - Ping](#attivita-ping)
    - [Attività 2 - ServerOFF](#attivita-serveroff)
- [🐧 Installazione Server](#server)
  - [🌐 1. Configurare un IP statico](#ip-statico)
  - [📦 2. Installazione dei pacchetti necessari](#pacchetti)
  - [🚚 3. Trasferire il progetto sul server](#trasferimento)
  - [⚙️ 4. Configurare il Backend](#backend)
  - [🌍 5. Avviare il server Web](#webserver)
  - [🔗 6. Configurazione con un Dominio](#dominio)

<br><br>

---

---

<br><br>

<a id="requisiti"></a>

## 📋 Requisiti

Prima di iniziare assicurati di avere:

- 🪟 Windows 10 o superiore
- ☕ Java 8 o superiore
- 🐧 Un server Linux (Debian 12 consigliato) sempre attivo

<br><br>

---

---

<br><br>

<a id="windows"></a>

## 🪟 Installazione su Windows

<a id="java"></a>

### ☕ 1. Installare Java

1. Apri il sito:

   https://www.java.com/en/download/

2. Scarica l'ultima versione disponibile di **Java**.

3. Avvia il programma di installazione e completa la procedura mantenendo le impostazioni predefinite.

4. Al termine verifica l'installazione aprendo il **Prompt dei comandi** ed eseguendo:

   ```bash
   java -version
   ```

> ✅ Se viene visualizzata la versione installata, Java è pronto all'uso.

<br><br>

---

---

<br><br>

<a id="progetto"></a>

### 📥 2. Scaricare il progetto

Clona la repository (si consiglia nella cartella **Download**):

```bash
git clone https://github.com/fibi0905/WakeOnLan.git
```

Una volta terminato il download:

- sposta la cartella **poweroff** fuori dalla repository;
- apri la cartella **Installation Bat**;
- esegui **install.bat** come **Amministratore**.

<br><br>

---

---

<br><br>

<a id="pianificazione"></a>

### 🗓️ 3. Configurare l'Utilità di pianificazione

Apri il menu **Start** e cerca:

```text
Pianificazione
```

<p align="center">
<img width="219" height="114" alt="Image" src="https://github.com/user-attachments/assets/bc8965e5-7565-4213-bcd6-80379035474a" />
</p>

Apri **Utilità di pianificazione**.

<p align="center">
<img width="345" height="108" alt="Image" src="https://github.com/user-attachments/assets/75580bed-7eb2-4d5a-bc2c-71c1c81b0d64" />
</p>

Crea due nuove attività (non attività di base):

- **Ping**
- **ServerOFF**

<p align="center">
<img width="1590" height="794" alt="Image" src="https://github.com/user-attachments/assets/45569c76-dc0c-4d06-ab32-e70fbe324265" />
</p>

<a id="attivita-ping"></a>

#### 🔹 Attività 1 - Ping

##### 🧾 Generale

Imposta:

- Nome: **Ping**
- **Esegui indipendentemente dalla connessione dell'utente**
- **Esegui con i privilegi più elevati**

<p align="center">
<img width="609" height="209" alt="Image" src="https://github.com/user-attachments/assets/f2f73dcf-3e72-4e49-bb6a-84977f0e68a0" />
</p>

##### ⏱️ Attivazione

Crea una nuova attivazione:

- **All'avvio**

<p align="center">
<img width="582" height="483" alt="Image" src="https://github.com/user-attachments/assets/2ffdc444-3b05-44ce-9f76-ba1a21f014ef" />
</p>

##### ▶️ Azioni

Crea una nuova azione:

- **Operazione:** Avvio programma
- **Programma o script:**

```text
wscript.exe
```

- **Argomenti:**

```text
"C:\Program Files\poweroff\bat\ping.vbs"
```

<p align="center">
<img width="439" height="461" alt="Image" src="https://github.com/user-attachments/assets/117bc606-5236-4d4b-823b-37a580b0aa8e" />
</p>

##### 🔍 Condizioni

Lascia **tutte le opzioni disattivate**.

##### 🛠️ Impostazioni

Abilita solamente:

- Consenti esecuzione su richiesta
- Se l'attività non termina quando richiesto, interrompila forzatamente

<a id="attivita-serveroff"></a>

#### 🔹 Attività 2 - ServerOFF

##### 🧾 Generale

Imposta:

- Nome: **ServerOFF**
- **Esegui indipendentemente dalla connessione dell'utente**
- **Esegui con i privilegi più elevati**

<p align="center">
<img width="609" height="209" alt="Image" src="https://github.com/user-attachments/assets/f2f73dcf-3e72-4e49-bb6a-84977f0e68a0" />
</p>

##### ⏱️ Attivazione

Crea una nuova attivazione:

- **All'avvio**

<p align="center">
<img width="582" height="483" alt="Image" src="https://github.com/user-attachments/assets/2ffdc444-3b05-44ce-9f76-ba1a21f014ef" />
</p>

##### ▶️ Azioni

Crea una nuova azione:

- **Operazione:** Avvio programma
- **Programma o script:**

```text
C:\Program Files\poweroff\bat\startServer.bat
```

<p align="center">
<img width="450" height="500" alt="Image" src="https://github.com/user-attachments/assets/b842f2a9-1cb0-4167-a0cc-97d592f9d885" />
</p>

##### 🔍 Condizioni

Lascia **tutte le opzioni disattivate**.

##### 🛠️ Impostazioni

Abilita solamente:

- Consenti esecuzione su richiesta
- Se l'attività non termina quando richiesto, interrompila forzatamente

<p align="right"><a href="#indice">⬆️ Torna all'indice</a></p>

<br><br>

---

---

<br><br>

<a id="server"></a>

## 🐧 Installazione Server

<a id="ip-statico"></a>

### 🌐 1. Configurare un IP statico

Per permettere al client Windows di comunicare sempre con il server, è consigliato assegnare un indirizzo IP statico.

In questa guida utilizzeremo:

```text
192.168.1.8
```

#### 🔎 Verificare il nome della scheda di rete

Eseguire:

```bash
ip a
```

Annotare il nome della scheda di rete (ad esempio `ens18`, `eth0` oppure `enp0s3`).

#### ✏️ Modificare la configurazione di NetworkManager

Aprire il file:

```bash
sudo nano /etc/NetworkManager/system-connections/<NOME_SCHEDA>.nmconnection
```

Sostituendo `<NOME_SCHEDA>` con quello trovato in precedenza.

Modificare la sezione IPv4 nel seguente modo:

```ini
[ipv4]
method=manual
address1=192.168.1.8/24,192.168.1.1
dns=8.8.8.8;1.1.1.1;
```

Dove:

- `192.168.1.8` è l'IP del server.
- `192.168.1.1` è il Gateway (generalmente il router).

Salvare il file.

#### 🔄 Riavviare NetworkManager

```bash
sudo systemctl restart NetworkManager
```

Verificare il nuovo indirizzo:

```bash
ip a
```

oppure

```bash
hostname -I
```

> [!NOTE]
> Se l'indirizzo **192.168.1.8** è già utilizzato nella propria rete, è possibile assegnarne uno differente.
>
> In questo caso sarà necessario modificare anche il file:
>
> ```text
> C:\Program Files\poweroff\bat\ping.bat
> ```
>
> sostituendo la riga:
>
> ```bat
> ping -n 1 192.168.1.8
> ```
>
> con il nuovo indirizzo IP assegnato al server.

<br><br>

---

---

<br><br>

<a id="pacchetti"></a>

### 📦 2. Installazione dei pacchetti necessari

Aggiornare il sistema:

```bash
sudo apt update
sudo apt upgrade -y
```

#### 🟩 Installare Node.js e npm

```bash
sudo apt install -y nodejs npm
```

Verificare l'installazione:

```bash
node -v
npm -v
```

#### 🔧 Installare PM2

```bash
sudo npm install -g pm2
```

Verificare:

```bash
pm2 -v
```

#### 🌐 Installare Nginx

```bash
sudo apt install -y nginx
```

Avviare il servizio:

```bash
sudo systemctl enable nginx
sudo systemctl start nginx
```

Verificare lo stato:

```bash
sudo systemctl status nginx
```

<br><br>

---

---

<br><br>

<a id="trasferimento"></a>

### 🚚 3. Trasferire il progetto sul server

#### 🔐 Installare il server SSH

Se non è già presente, installare **OpenSSH Server**:

```bash
sudo apt update
sudo apt install -y openssh-server
```

Abilitare il servizio:

```bash
sudo systemctl enable ssh
sudo systemctl start ssh
```

Verificare che sia in esecuzione:

```bash
sudo systemctl status ssh
```

#### 📍 Verificare l'indirizzo IP del server

```bash
hostname -I
```

Ad esempio:

```text
192.168.1.8
```

#### 📤 Trasferire i file dal PC al server

Dal computer Windows (PowerShell oppure Prompt dei comandi), posizionarsi nella cartella contenente il progetto ed eseguire:

```bash
scp -r ./WakeOnLan/dist/* nomeutente@192.168.1.8:/tmp/
```

Sostituire:

- `nomeutente` con l'utente del server.
- `192.168.1.8` con l'indirizzo IP del server.

Alla prima connessione verrà richiesta la conferma della chiave SSH, quindi inserire la password dell'utente.

#### 📂 Copiare i file nella cartella di Nginx

Una volta collegati al server tramite SSH:

```bash
ssh nomeutente@192.168.1.8
```

eseguire:

```bash
sudo cp -r /tmp/* /var/www/html/
```

Infine assegnare i permessi corretti:

```bash
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
```

Verificare che i file siano stati copiati:

```bash
ls /var/www/html
```

<br><br>

---

---

<br><br>

<a id="backend"></a>

### ⚙️ 4. Configurare il Backend

Dopo aver trasferito il progetto sul server, copiare la cartella **server-wol** nella directory */root*:

```bash
scp -r ./server-wol/* nomeutente@192.168.1.8:/root/
```

Accedere quindi al server tramite SSH ed entrare nella cartella del progetto:

```bash
cd /root/server-wol
```

#### 📥 Installare le dipendenze

Eseguire il seguente comando per installare tutte le dipendenze necessarie:

```bash
npm install express cors && npm install -D typescript ts-node @types/node @types/express @types/cors
```

#### ▶️ Avviare il server con PM2

Per avviare il backend come servizio utilizzare:

```bash
pm2 start npx --name wol-backend -- ts-node src/index.ts
```

#### 💾 Salvare la configurazione di PM2

```bash
pm2 save
```

#### 🔁 Abilitare l'avvio automatico

Per fare in modo che il backend venga avviato automaticamente ad ogni riavvio del server:

```bash
pm2 startup
```

Il comando mostrerà una riga aggiuntiva da eseguire. Copiarla ed eseguirla per completare la configurazione.

> [!IMPORTANT]
> Prima di utilizzare il server è **fortemente consigliato** modificare la password predefinita.
>
> Il file da modificare si trova nel seguente percorso:
>
> ```text
> /root/server-wol/data/pass.txt
> ```
>
> Aprire il file con un editor di testo (ad esempio `nano`) e sostituire il contenuto con la password desiderata:
>
> ```bash
> nano /root/server-wol/data/pass.txt
> ```
>
> Salvare il file prima di avviare il server.

<br><br>

---

---

<br><br>

<a id="webserver"></a>

### 🌍 5. Avviare il server Web

Avviare il servizio **Nginx**:

```bash
sudo systemctl start nginx
```

Se non è già stato fatto, abilitarne l'avvio automatico all'accensione del server:

```bash
sudo systemctl enable nginx
```

Verificare che il servizio sia in esecuzione:

```bash
sudo systemctl status nginx
```

<br><br>

---

---

<br><br>

<a id="dominio"></a>

### 🔗 6. Configurazione con un Dominio

Se si desidera rendere l'applicazione raggiungibile tramite un dominio, è possibile utilizzare **Nginx Proxy Manager** installato su un server dedicato.

Per l'installazione di **Nginx Proxy Manager** è possibile seguire il seguente video:

🌐[https://www.youtube.com/watch?v=P3imFC7GSr0](https://www.youtube.com/watch?v=P3imFC7GSr0)

#### 🧩 Configurazione del Proxy Host

Creare un nuovo **Proxy Host** con le impostazioni desiderate.

<p align="center">
<img width="589" height="742" alt="Image" src="https://github.com/user-attachments/assets/d019ad27-f79c-453e-b0b7-5321c2d8c1c4" />
</p>

<p align="center">
<img width="596" height="483" alt="Image" src="https://github.com/user-attachments/assets/547b7ee6-bf69-4bcf-892f-12259f13db57" />
</p>

#### ✅ Verifica

Una volta completata la configurazione del proxy e della zona DNS, l'applicazione sarà raggiungibile direttamente dal proprio dominio.

Ad esempio:

```text
https://example.com
```

oppure

```text
https://wol.example.com
```

Sostituire il dominio con quello configurato.

<p align="right"><a href="#indice">⬆️ Torna all'indice</a></p>