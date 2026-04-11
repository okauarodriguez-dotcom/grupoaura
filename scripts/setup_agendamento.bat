@echo off
REM Agendamento automático do fathom_sync.py no Windows Task Scheduler
REM Execute este arquivo como Administrador

set SCRIPT_DIR=%~dp0
set PYTHON=python
set SCRIPT=%SCRIPT_DIR%fathom_sync.py
set TASK_NAME=FathomSync

echo Criando tarefa agendada: %TASK_NAME%
echo Executara a cada 30 minutos automaticamente.

schtasks /create ^
  /tn "%TASK_NAME%" ^
  /tr "\"%PYTHON%\" \"%SCRIPT%\"" ^
  /sc minute ^
  /mo 30 ^
  /f ^
  /rl HIGHEST

if %ERRORLEVEL% == 0 (
    echo.
    echo Tarefa criada com sucesso!
    echo O script rodara a cada 30 minutos em background.
    echo.
    echo Para verificar: Abra o "Agendador de Tarefas" do Windows e procure por "%TASK_NAME%"
    echo Para remover:   schtasks /delete /tn "%TASK_NAME%" /f
) else (
    echo.
    echo Erro ao criar tarefa. Execute este arquivo como Administrador.
)

pause
