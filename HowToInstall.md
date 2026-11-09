# How To Install 


## Cose Necesarie 

- Sistema Windows 10 o superiori 
    - Java 8 o superiori  

- Server sempre attivo 
    - Debian 12 (o linux system)


## Lato Windows 

### Installazione Java

<!-- Da scrivere -->

### Passo 1.

clonare la cartella, meglio se in **Downloads** 

```bash
git clone https://github.com/fibi0905/WakeOnLan.git
```

una volta fatto spostare fuori la cartella *poweroff* e adare nella cartella *Installation Bat* ed eseguire come amministratore [***install.bat***](./Installation%20Bat/install.bat)

### Passo 2. 
<!-- Immagine tool bar windows con freccia che indica il logo -->
<img width="219" height="114" alt="Image" src="https://github.com/user-attachments/assets/bc8965e5-7565-4213-bcd6-80379035474a" /> 


andare nel icona windows e cercare:

```text
pianificazione
```
<!-- Immagine logo di unita di pianificazione  -->
<img width="345" height="108" alt="Image" src="https://github.com/user-attachments/assets/75580bed-7eb2-4d5a-bc2c-71c1c81b0d64" />

eseguire l'unita di pianificazione e creare due **attività**

<!-- immagine con pannello del attività di base con freccia verso attività -->

<img width="1590" height="794" alt="Image" src="https://github.com/user-attachments/assets/45569c76-dc0c-4d06-ab32-e70fbe324265" />

#### 2.1 Attività per ping

**Generale** nella sezione generale date come nome di attività: Ping. Nelle opzioni di sicurezza selezionate come utente il vostro ed sputate le caselle *esegui indipendetemente dalla connesione degli utenti* e *Esegui con i privilegi più elevati*

<!-- Immagine di opzioni di sicurezza -->

<img width="609" height="209" alt="Image" src="https://github.com/user-attachments/assets/f2f73dcf-3e72-4e49-bb6a-84977f0e68a0" />


**Attivazione**: nella sezione attivazione premete il tasto Nuovo in basso a sinistra. selezionate come *Avvia l'attività*: **All'avvio**

<!-- Immagine dela attivazione  -->
<img width="582" height="483" alt="Image" src="https://github.com/user-attachments/assets/2ffdc444-3b05-44ce-9f76-ba1a21f014ef" />

**Azioni**: nella sezione azioni create una nuova, con il tasto Nuova... in basso a sisnistra. selezionate:
- Operazione: **Avvio Programma**
- Programma o script: ```wscript.exe```
- Aggiungi argomenti facoltativi:  ```"C:\Program Files\poweroff\bat\ping.vbs"```

<!-- Immagine azione -->
<img width="439" height="461" alt="Image" src="https://github.com/user-attachments/assets/117bc606-5236-4d4b-823b-37a580b0aa8e" />

**Condzioni**: NON ci deve essere niente di attivo 

**Impostazioni**: deve essere supntato solo: 
- *consenti eseguzione su richiesta*
- *se l'attività non cessa quanto richiesto, imponi l'interuzione*

#### 2.2 Attività per Server OFF

**Generale** nella sezione generale date come nome di attività: ServerOFF. Nelle opzioni di sicurezza selezionate come utente il vostro ed sputate le caselle *esegui indipendetemente dalla connesione degli utenti* e *Esegui con i privilegi più elevati*

<!-- Immagine di opzioni di sicurezza -->

<img width="609" height="209" alt="Image" src="https://github.com/user-attachments/assets/f2f73dcf-3e72-4e49-bb6a-84977f0e68a0" />


**Attivazione**: nella sezione attivazione premete il tasto Nuovo in basso a sinistra. selezionate come *Avvia l'attività*: **All'avvio**

<!-- Immagine dela attivazione  -->
<img width="582" height="483" alt="Image" src="https://github.com/user-attachments/assets/2ffdc444-3b05-44ce-9f76-ba1a21f014ef" />

**Azioni**: nella sezione azioni create una nuova, con il tasto Nuova... in basso a sisnistra. selezionate:
- Operazione: **Avvio Programma**
- Programma o script: ```"C:\Program Files\poweroff\bat\startServer.bat"```

<!-- Immagine azione -->
<img width="439" height="461" alt="Image" src="https://github.com/user-attachments/assets/117bc606-5236-4d4b-823b-37a580b0aa8e" />

**Condzioni**: NON ci deve essere niente di attivo 

**Impostazioni**: deve essere supntato solo: 
- *consenti eseguzione su richiesta*
- *se l'attività non cessa quanto richiesto, imponi l'interuzione*

## Lato Server