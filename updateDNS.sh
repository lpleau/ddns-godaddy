#!/bin/bash

domain=$1
host=$2
APIKey=$3
APISecret=$4

WanIP='curl -s "https://api.ipify.org"

GDIP='curl -s -X GET -H "Authorization: sso-key ${APIKey}:${APISecret}" "https://api.godaddy.com/v1/domains/${domain}/records/A/${host}" | cut -d'[' -f 2 | cut -d']' -f 1 | jq -r '.data'
