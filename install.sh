#!/bin/bash

#Change permissions to execute
sudo chmod 700 script/updateDNS.sh
sudo chmod 700 script/domainlist
sudo chmod 700 script/ddns-godaddy

#Move all files to correct placement
sudo cp script/updateDNS.sh /usr/local/bin/updatedns
sudo cp script/domainlist /usr/local/bin/domainlist
sudo cp script/ddns-godaddy /usr/local/bin/ddns-godaddy

#Install dependencies
sudo apt install jq -y

#Configure first Dyn DNS
ddns-godaddy

#Create cron job to keep DDNS updated
crontab -l > mycron
echo "*/5 * * * * /usr/local/bin/domainlist" >> mycron
crontab mycron
rm mycron

clear
echo -e "Thank you for installing and configuring ddns-GoDaddy! \nTo configure or view current config, type 'ddns-godaddy' in any terminal!"