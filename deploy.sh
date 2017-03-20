cd /usr/share/nginx/html/hook
rm -Rf /usr/share/nginx/html/hook/*
curl -s https://circleci.com/api/v1/project/lucasmtav/hook-web/$1/artifacts?circle-token=ba8a2af7da5c5176e0464baf7d68d429b20373c7 -H "Accept: application/json"  | python -c 'import json,sys;data=json.load(sys.stdin);print data[1]["url"]+"?circle-token=ba8a2af7da5c5176e0464baf7d68d429b20373c7"' | xargs wget -O hook.tar
tar -zxvf hook.tar