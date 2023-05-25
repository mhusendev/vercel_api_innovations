const security = require('./config/salt')

let password = 'mhusen123';

let hasil = async () => {
   let isi = await security.encrypt(password)
   return isi
}
console.log(hasil())

