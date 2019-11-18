const mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'local';
const databaseUser = 'local';
const databasePswd = 'local';

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
       mongoose.connect(`mongodb://${databaseUser}:${databasePswd}@${server}/${database}?authSource=admin`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

const EmailModelSchema = require('./models/EmailModelSchema.js');
const EmailModelSchemaInstance = new EmailModelSchema({
  email: 'maimodell@gmail.com'
})

EmailModelSchemaInstance.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })

const EmailWithValidator = require('./models/EmailWithValidator.js');
const emailWithValidatorInstance = new EmailWithValidator({
  email: 'IwillBeLowerCase@HOTMAIL.COM'
})

emailWithValidatorInstance.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })


module.exports = new Database()