# セットアップ
npm install express  
npm install nodemon  
npm install mysql  

# 起動
node app.js
## ノーデーモンで起動
npx nodemon app.js

# アクセス
http://localhost:3000

## mysql admin
http://localhost:8080

# mysql接続
mysql -u docker -pdocker

# docker入る
docker exec -i -t mysql_host bash