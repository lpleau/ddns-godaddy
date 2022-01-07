#!/bin/bash

# Define the filename
filename='domainLISTddns.sh'

# Type the text that you want to append
read -p "Enter domain name:" domain
read -p "Enter host:" host
read -p "Enter API Key:" apikey
read -p "Enter API Secret:" apisecret
# Check the new text is empty or not
if [ "$newtext" != "" ]; then
      # Append the text by using '>>' symbol
      echo updatedns.sh $domain $host $apikey $apisecret >> $filename
fi
