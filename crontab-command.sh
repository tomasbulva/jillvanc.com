0 0 1 * * certbot certonly --manual --preferred-challenges=http --manual-auth-hook /home/ubuntu/jill-server/authenticator.sh --manual-cleanup-hook /home/ubuntu/jill-server/cleanup.sh -d jillvanc.com
