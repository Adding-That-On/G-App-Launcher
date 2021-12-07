$source = "D:\a\G-App-Launcher\G-App-Launcher\"
$destination = "D:\a\G-App-Launcher\G-App-Launcher\G-App-Launcher_latest.zip"
If(Test-path $destination) {Remove-item $destination}
Add-Type -assembly "system.io.compression.filesystem"
[io.compression.zipfile]::CreateFromDirectory($Source, $destination) 
