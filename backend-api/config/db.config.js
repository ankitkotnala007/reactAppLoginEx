var MongoClient = require('mongodb').MongoClient;
class Database{
    constructor(){
        this.url = "mongodb://localhost:27017";
        this.db = "react_app_login_ex";
    }
    getConnection(){
        return new Promise((resolve , reject)=>{
         MongoClient.connect(this.url,{ useNewUrlParser: true } , (err , client)=>{
             if(err) reject("Connection Error : "+err.message);
             resolve(client.db(this.db));
         })
        })
     }

}

module.exports = new Database();