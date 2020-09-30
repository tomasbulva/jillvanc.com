#!/bin/bash
echo $CERTBOT_VALIDATION > /home/ubuntu/jill-server/public/.well-known/acme-challenge/$CERTBOT_TOKEN
