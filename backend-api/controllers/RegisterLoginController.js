const RegisterLogin = require('./../Operations/RegisterLogin');

class RegisterLoginController {
    constructor(app) {
        this.app = app;
        this.init();
        this.registerUser();
        this.login();
    }
    init(){
        this.app.get('/', (req, res) => {
            return res.status(404)
                      .send('Project: GET and POST APIs for Blockchain.');
        });
    }

    async registerUser(){
        this.app.post('/register/new/user', async(req,res)=>{
            try{
                let reg_res = await RegisterLogin._register(req.body);
                if(reg_res.status){
                    res.status(200)
                        .json({status:'success' , message : reg_res.message })
                }else{
                    res.status(300)
                        .json({status: 'failure' ,
                                message: reg_res.message })
                }
            }catch(e){
                console.log(e.message)
            }
          
       })
    }

    async login(){
        this.app.post('/login',async (req , res)=>{
            try{
                let log_ = await RegisterLogin._login(req.body);
                if(log_.status) res.status(200) 
                                    .json({status:"success" , data : log_.data});
                else res.status(404)
                        .json({status:"failure" , message : log_.message });
            }catch(e){
                res.status(500)
                    .json({status: "failure" , message : e.message });
            }
          
        })
    }

}

module.exports = (app) => { return new RegisterLoginController(app); };