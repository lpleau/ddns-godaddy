#!/bin/bash

#Change permissions to execute
sudo chmod 777 ddns-godaddy/script/updateDNS
sudo chmod 777 ddns-godaddy/data/domainlist

#Move all files to correct placement
sudo mkdir /var/www/ddns-godaddy
sudo cp -R ddns-godaddy /var/www/ddns-godaddy

#Install dependencies
sudo apt install jq -y
sudo apt install curl -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
sudo apt-get install -y nodejs

#Create cron job to keep DDNS updated
crontab -l > mycron
echo "*/5 * * * * /var/www/ddns-godaddy/script/domainlist" >> mycron
crontab mycron
rm mycron

clear
IP=`hostname -i`
echo -e "Thank you for installing and configuring ddns-GoDaddy! \nTo configure or view current config, go to your browser and type http://${IP}:7314!"