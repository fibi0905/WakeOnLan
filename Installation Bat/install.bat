@echo off
set "origine=%USERPROFILE%\Downloads\poweroff"
set "destinazione=C:\Program Files\poweroff"

:: Esegue la copia del ramo di cartelle
robocopy "%origine%" "%destinazione%" /E /B /R:3 /W:5 /MT:16

:: Regole firewall
netsh advfirewall firewall add rule name="Java 4040 in" dir=in action=allow protocol=TCP localport=4040 profile=any && netsh advfirewall firewall add rule name="Java 4040 out" dir=out action=allow protocol=TCP localport=4040 profile=any

:: Imposta rete come privata
powershell -Command "Set-NetConnectionProfile -NetworkCategory Private"

:: Copia ping.vbs nella cartella di avvio automatico
copy "C:\Program Files\poweroff\bat\ping.vbs" "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\ping.vbs"