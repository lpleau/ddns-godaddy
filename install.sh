#!/bin/bash

sudo chmod 700 updateDNS.sh
sudo chmod 700 domainLISTddns.sh
sudo mv updateDNS.sh /usr/local/bin/updatedns.sh
sudo mv domainLISTddns.sh /usr/local/bin/domainLISTddns.sh
sudo apt install jq -y
