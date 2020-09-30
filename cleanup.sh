#!/bin/bash
rm -f /home/ubuntu/jill-server/public/.well-known/acme-challenge/$CERTBOT_TOKEN
sudo systemctl restart jill-server
