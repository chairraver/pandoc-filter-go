@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "C:\Users\PDBFRIDD\Documents\pdbfridd\pandoc-filter-go\filter-go" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "C:\Users\PDBFRIDD\Documents\pdbfridd\pandoc-filter-go\filter-go" %*
)
