!#/bin/bash

sudo chmod 700 updateDNS.sh
sudo chmod 700 domainListddns.sh
sudo mv updateDNS.sh /usr/local/bin/updatedns.sh
sudo mv domainListddns.sh /usr/local/bin/domainListddns.sh
sudo apt install jq -y
