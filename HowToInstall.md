# How To Install

## Requisiti

Prima di iniziare assicurati di avere:

- Windows 10 o superiore
- Java 8 o superiore
- Un server Linux (Debian 12 consigliato) sempre attivo

---

# Installazione su Windows

## 1. Installare Java

1. Apri il sito:

   https://www.java.com/en/download/

2. Scarica l'ultima versione disponibile di **Java**.

3. Avvia il programma di installazione e completa la procedura mantenendo le impostazioni predefinite.

4. Al termine verifica l'installazione aprendo il **Prompt dei comandi** ed eseguendo:

```bash
java -version
```

Se viene visualizzata la versione installata, Java è pronto all'uso.

---

## 2. Scaricare il progetto

Clona la repository (si consiglia nella cartella **Download**):

```bash
git clone https://github.com/fibi0905/WakeOnLan.git
```

Una volta terminato il download:

- sposta la cartella **poweroff** fuori dalla repository;
- apri la cartella **Installation Bat**;
- esegui **install.bat** come **Amministratore**.

---

## 3. Configurare l'Utilità di pianificazione

Apri il menu **Start** e cerca:

```text
Pianificazione
```

<img width="219" height="114" alt="Image" src="https://github.com/user-attachments/assets/bc8965e5-7565-4213-bcd6-80379035474a" />

Apri **Utilità di pianificazione**.

<img width="345" height="108" alt="Image" src="https://github.com/user-attachments/assets/75580bed-7eb2-4d5a-bc2c-71c1c81b0d64" />

Crea due nuove attività (non attività di base):

- **Ping**
- **ServerOFF**

<img width="1590" height="794" alt="Image" src="https://github.com/user-attachments/assets/45569c76-dc0c-4d06-ab32-e70fbe324265" />

---

# Attività 1 - Ping

## Generale

Imposta:

- Nome: **Ping**
- **Esegui indipendentemente dalla connessione dell'utente**
- **Esegui con i privilegi più elevati**

<img width="609" height="209" alt="Image" src="https://github.com/user-attachments/assets/f2f73dcf-3e72-4e49-bb6a-84977f0e68a0" />

---

## Attivazione

Crea una nuova attivazione:

- **All'avvio**

<img width="582" height="483" alt="Image" src="https://github.com/user-attachments/assets/2ffdc444-3b05-44ce-9f76-ba1a21f014ef" />

---

## Azioni

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

<img width="439" height="461" alt="Image" src="https://github.com/user-attachments/assets/117bc606-5236-4d4b-823b-37a580b0aa8e" />

---

## Condizioni

Lascia **tutte le opzioni disattivate**.

---

## Impostazioni

Abilita solamente:

- Consenti esecuzione su richiesta
- Se l'attività non termina quando richiesto, interrompila forzatamente

---

# Attività 2 - ServerOFF

## Generale

Imposta:

- Nome: **ServerOFF**
- **Esegui indipendentemente dalla connessione dell'utente**
- **Esegui con i privilegi più elevati**

<img width="609" height="209" alt="Image" src="https://github.com/user-attachments/assets/f2f73dcf-3e72-4e49-bb6a-84977f0e68a0" />

---

## Attivazione

Crea una nuova attivazione:

- **All'avvio**

<img width="582" height="483" alt="Image" src="https://github.com/user-attachments/assets/2ffdc444-3b05-44ce-9f76-ba1a21f014ef" />

---

## Azioni

Crea una nuova azione:

- **Operazione:** Avvio programma
- **Programma o script:**

```text
C:\Program Files\poweroff\bat\startServer.bat
```

<img width="439" height="461" alt="Image" src="https://github.com/user-attachments/assets/117bc606-5236-4d4b-823b-37a580b0aa8e" />

---

## Condizioni

Lascia **tutte le opzioni disattivate**.

---

## Impostazioni

Abilita solamente:

- Consenti esecuzione su richiesta
- Se l'attività non termina quando richiesto, interrompila forzatamente

---

# Installazione sul Server

Seguire la procedura di installazione lato server riportata nella documentazione del progetto.