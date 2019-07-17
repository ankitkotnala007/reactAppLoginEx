import axios from 'axios';


export class helper{
    async _login(cred){
        return new Promise((resolve , reject)=>{
          axios.post('http://localhost:8000/api/v1/login',{
            username: cred.username,
            password: cred.password
          }).then((result) => { resolve(result); })
          .catch((err) => { reject(err) });
        })
    }
}
