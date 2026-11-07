const BASE_URL = 'https://192.168.1.8';

export type Pc = { nome: string; mac: string; };

export const getPcs = async (): Promise<Pc[]> => {
  const res = await fetch(`${BASE_URL}/pcs`);
  return res.json();
};

export const addPc = async (nome: string, mac: string): Promise<Pc> => {
  const res = await fetch(`${BASE_URL}/pcs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, mac }),
  });
  return res.json();
};

export const deletePc  = async (nome: string): Promise<void> => {
  await fetch(`${BASE_URL}/pcs/${encodeURIComponent(nome)}`, { method: 'DELETE' });
};

export const wakePC = async (name: string): Promise<void> => {
  await fetch(`${BASE_URL}/wol`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
};

export const shutdown = async (name:string): Promise<void> =>{
  await fetch(`${BASE_URL}/down`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
}


export const logIn = async (pass:string): Promise<boolean> =>{
  const rest = await fetch(`${BASE_URL}/log`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pass }),
  })
  
 const data =  await rest.json();

 //console.log("il risultato è: " + data.success + "\nStatus:" + await rest.status);

 return data.success;
}