@echo off
:loop
ping -n 1 192.168.1.8
timeout /t 86400 /nobreak
goto loop