# mongoose27
mongoose API

https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
http://thecodebarbarian.com/2013/04/29//easy-web-prototyping-with-mongodb-and-nodejs

## 1 - MongoDB
### run
mongod --dbpath /Users/marco27/opt/mongodb-4.2.1/m27data/db  --auth
### login
mongo -u local -p local 127.0.0.1:27017 --authenticationDatabase admin
use local
### select
db.emails.find();
db.emailwithvalidators.find();
    
## 2 - node
#only 1st time: npm init -y
#only 1st time: npm install mongoose validator
cd /Users/marco27/dev/repository/git/mongoose27
node index.js
    Server running at: http://localhost:4000