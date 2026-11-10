<div align="center">

# 🚀 Wake On LAN Remote Manager

**Accendi e spegni i tuoi computer da remoto, direttamente dallo smartphone.**

</div>

<p align="center">

<img src="https://img.shields.io/badge/Ionic-React-3880FF?style=for-the-badge&logo=ionic&logoColor=white" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />

</p>

<p align="center">

<img src="https://img.shields.io/badge/Wake--on--LAN-Networking-0EA5E9?style=for-the-badge" />
<img src="https://img.shields.io/badge/TCP%20%2F%20UDP-Sockets-2563EB?style=for-the-badge" />
<img src="https://img.shields.io/badge/REST%20API-Backend-16A34A?style=for-the-badge" />
<img src="https://img.shields.io/badge/Client--Server-Architecture-orange?style=for-the-badge" />

</p>

---

# 📖 Overview

**Wake On LAN Remote Manager** è un progetto personale che permette di **accendere e spegnere un computer della propria rete LAN anche quando ci si trova fuori casa**, senza utilizzare software di desktop remoto.

L'accensione sfrutta il protocollo **Wake-on-LAN (WOL)**, mentre lo spegnimento è gestito da un piccolo **server Java installato sul PC remoto**.

L'obiettivo è offrire un'interfaccia semplice e sicura per amministrare i propri dispositivi da remoto.

---

# ✨ Funzionalità

- ⚡ Accensione remota tramite Wake-on-LAN
- 🖥️ Spegnimento remoto del PC
- 📱 Interfaccia mobile sviluppata con Ionic React
- 🌐 Backend REST sviluppato in Node.js / TypeScript
- 💾 Gestione dei dispositivi tramite MAC Address
- 🔄 Aggiornamento automatico dell'associazione MAC → IP
- 🔒 Accesso protetto da autenticazione

---

# 🏗️ Architettura

Il progetto è composto da tre componenti principali.

```mermaid
flowchart TB
    APP["📱 Ionic React App<br/>Frontend mobile"] -->|"REST API"| BE["🌐 Node.js Backend<br/>TypeScript + Express"]

    subgraph LAN["🏠 Rete locale (LAN)"]
        PC["💻 Computer"]
        JAVA["☕ Server Java"]
    end

    BE -->|"Magic Packet<br/>UDP broadcast"| PC
    BE -->|"Comando shutdown<br/>TCP"| JAVA
    JAVA -->|"Shutdown del sistema"| PC
```

| Componente | Tecnologia | Responsabilità |
|------------|------------|----------------|
| **Frontend** | Ionic React | Visualizza i dispositivi registrati<br/>Aggiunge un nuovo computer<br/>Accende e spegne un PC<br/>Autenticazione all'applicazione |
| **Backend** | Node.js + TypeScript (REST) | Gestione dell'autenticazione e dei computer registrati<br/>Invio del Magic Packet Wake-on-LAN<br/>Individuazione dell'IP partendo dal MAC Address<br/>Invio del comando di spegnimento al server Java |
| **Server Java** | Java (TCP) | Rimane in ascolto sulla rete locale<br/>Riceve il comando di spegnimento dal backend<br/>Esegue il comando di arresto del sistema operativo |

In questo modo il PC può essere spento anche quando non è presente alcun utente davanti alla macchina.

## 🔄 Aggiornamento automatico MAC → IP

L'indirizzo IP di un computer può cambiare nel tempo, rendendo fragile lo spegnimento remoto. Per evitare configurazioni manuali, ogni computer esegue uno script che:

1. effettua un **ping ogni 24 ore**;
2. aggiorna automaticamente la tabella ARP del server;
3. permette al backend di ricavare il nuovo indirizzo IP partendo esclusivamente dal MAC Address.

Il sistema continua così a funzionare anche dopo il rinnovo del DHCP, senza interventi manuali.

---

# ⚙️ Come funziona

## Accensione del PC

```mermaid
flowchart LR

A["👤 Utente"] --> B["📱 App Ionic React"]
B --> C["🌐 Backend Node.js"]
C --> D["📡 Invio Magic Packet<br/>(Wake-on-LAN)"]
D --> E["💻 Computer nella LAN"]
E --> F["✅ PC acceso"]
```

## Spegnimento del PC

```mermaid
flowchart LR

A["👤 Utente"] --> B["📱 App Ionic React"]
B --> C["🌐 Backend Node.js"]
C --> D["🔍 Ricerca IP dal MAC Address"]
D --> E["📨 Invio comando TCP"]
E --> F["☕ Server Java"]
F --> G["⚙️ Shutdown del sistema"]
G --> H["🖥️ PC spento"]
```

---

# 🛠️ Tecnologie

| Tecnologia | Utilizzo |
|------------|----------|
| Ionic React | Frontend |
| React | UI |
| TypeScript | Frontend & Backend |
| Node.js | REST Backend |
| Express | API |
| Java | Server remoto |
| TCP | Spegnimento remoto |
| UDP | Wake-on-LAN |
| Windows Batch | Automazione |
| Wake-on-LAN | Accensione remota |

---

# 🎯 Obiettivi del progetto

Questo progetto nasce con l'obiettivo di approfondire diversi aspetti dello sviluppo software, tra cui:

- progettazione di architetture client/server;
- sviluppo Full Stack;
- networking TCP/UDP;
- protocolli Wake-on-LAN;
- automazione tramite script;
- comunicazione tra applicazioni distribuite;
- progettazione di API REST.

---

# 📦 Installazione

Per la configurazione completa del progetto è disponibile la guida dedicata:

👉 **[HowToInstall.md](./HowToInstall.md)**

La guida contiene tutte le istruzioni per installare il frontend, configurare backend e server Java, installare gli script di supporto e preparare l'ambiente.

---

# 📄 Licenza

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg