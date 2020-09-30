key="~/.ssh/other_keys/LightsailDefaultKey-us-west-2.pem"

echo "creating archive"
ssh ubuntu@34.213.229.241 -q <<'ENDSSH'
  TIMESTAMP=$(date +%d-%m-%Y_%H-%M-%S)

  cd ~/jill-server/
  tar -czf jill-web-${TIMESTAMP}.tar.gz * --exclude .git
  mv jill-web-${TIMESTAMP}.tar.gz ../
  echo "done archiving old"
ENDSSH

echo "transfering files"
rsync -rave "ssh -i ${key}" $PWD/* ubuntu@34.213.229.241:~/jill-server/ --exclude='node_modules';

echo "installing"
ssh ubuntu@34.213.229.241  -q <<'ENDSSH'
  cd ~/jill-server/

  if [ -d "node_modules" ]; then
  	echo "deleting old node_modules"
  	rm -rf node_modules;
  fi

  echo "Installing new node_modules"
  npm install

	echo "restarting server"
  sudo service jill-server restart

ENDSSH
