const express = require("express");
const bodyParser = require("body-parser");
this.app = express();
this.app.set("port",8080);
this.app.use(bodyParser.urlencoded({extended:true}));
this.app.use(bodyParser.json());

this.app.listen(this.app.get("port"), () => {
    console.log(`Server Listening on port: ${this.app.get("port")}`);
});

this.app.get('/',(req,res)=>{
    res.send('ehllo')
})