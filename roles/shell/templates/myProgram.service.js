[Unit]
Description=My Script
After=network.target

[Service]
ExecStart=/usr/local/bin/myProgram.sh

[Install]
WantedBy=default.target
