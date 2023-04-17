rem copiare file code.bat nella cartella -- D:\Program Files\nodejs 
@echo off
if "%1"=="" goto ERRORE
"D:\\Program Files\\VsCode\\Code.exe" %1
goto FINE
:ERRORE
"D:\\Program Files\\VsCode\\Code.exe"
:FINE
cls
