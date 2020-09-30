ssh -i ~/.ssh/other_keys/LightsailDefaultKey-us-west-2.pem ubuntu@34.213.229.241 <<'ENDSSH'

  cd ~/jill-server/

  echo "deleting all old files"
  ls | grep -v *.gz | xargs rm

  echo "upacking latest archive"
  ls -t *.gz | tail -n 1 | xargs tar zxf

  echo "marking used archive"
  ls -t *.gz | tail -n 1 | xargs mv ./$1.usingit

  sudo service jill-server restart

ENDSSH
