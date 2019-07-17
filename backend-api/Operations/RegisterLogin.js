const Database = require('./../config/db.config');

class RegisterLogin{
  
    async _register(data){
        let db = await Database.getConnection();
        return new Promise((resolve , reject)=>{
            db.collection('user').insertOne(data,(err , result)=>{
                if(err) reject(err.message);
                resolve({status:true , message: result})
            })
        })
    }

    async _login(cred){
        let db = await Database.getConnection();
        return new Promise((resolve , reject)=>{
            db.collection('user').find({email:cred.username , password:cred.password}).toArray(function(err, result) {
                if (err) reject({status:false , message: err.message });
                else if(result.length > 0) resolve({status:true , data : result});
                else resolve({status:false , message : 'Invalid Cred or Not Registered !'});
              });
        })
    }
}

module.exports = new RegisterLogin();