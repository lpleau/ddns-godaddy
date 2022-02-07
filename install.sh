#!/bin/bash

#Change permissions to execute
sudo chmod 777 script/updateDNS
sudo chmod 777 script/domainlist
sudo chmod 777 script/ddns-godaddy

#Move all files to correct placement
sudo mkdir /usr/local/bin/ddns
sudo cp script/updateDNS /usr/local/bin/ddns/updatedns
sudo cp script/domainlist /usr/local/bin/ddns/domainlist
sudo cp script/ddns-godaddy /usr/local/bin/ddns-godaddy
sudo cp script/.domainAPI /usr/local/bin/ddns/.domainAPI

#Install dependencies
sudo apt install jq -y

#Create cron job to keep DDNS updated
crontab -l > mycron
echo "*/5 * * * * /usr/local/bin/ddns/domainlist" >> mycron
crontab mycron
rm mycron

clear
echo -e "Thank you for installing and configuring ddns-GoDaddy! \nTo configure or view current config, type 'ddns-godaddy' in any terminal!"