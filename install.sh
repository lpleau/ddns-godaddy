#!/bin/bash

sudo chmod 700 updateDNS.sh
sudo chmod 700 domainLISTddns.sh
sudo chmod 700 addDNSdomain.sh
sudo mv updateDNS.sh /usr/local/bin/updatedns.sh
sudo mv domainLISTddns.sh /usr/local/bin/domainLISTddns.sh
sudo mv addDNSdomain.sh /usr/local/bin/addDNSdomain
sudo apt install jq -y
addDNSdomain
