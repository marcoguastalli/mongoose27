const mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'local';

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

const EmailModel = require('./models/EmailModelSchema.js');
const emailInstance = new EmailModel({
  email: 'mail@gmail.com'
})

emailInstance.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })

module.exports = new Database()