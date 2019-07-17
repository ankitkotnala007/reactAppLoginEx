import React from 'react';
import Panel from './../components/panel/panel';

// Component files
import InputText from './../components/InputText/inputText';
import Button from './../components/button/button';
import TimeText from './../components/timeText/timetext';
import Switch from './../components/toggleButton/togglebutton';

// Helper files
const helper= require('./../actions/helper'); 



class Login extends React.Component{
        
    onHandleClick = async ()=>{
        if(this.switch.state.istoggle)
        {     
            let help = new helper.helper();
             help._login({username:this.Input.state.value , password:this.password.state.value})
                    .then((result) => {   console.log('response : ',result); 
                                            if(result.data.status === 'success')
                                          this.props.history.push('/home'); })
                    .catch((err) => {   console.log('err : ',err.message) });
        }
    }

    render(){
        return(
            <Panel>
            <div className='panel-head'>
                    <TimeText/>
                </div>
                <div className='panel-body'>
                    <InputText placeholder='username' type='text' ref={Input => this.Input = Input }/>
                    <InputText placeholder='password' type='password'  ref={password => this.password = password}/>
                    <div className='panel-body-butswitch'>
                        <Button text='Submit' onHandleClick={this.onHandleClick}/>
                        <div  className='panel-body-butswitch_switch'>
                        <Switch ref = { toggle => this.switch = toggle }/>
                        </div>
                    </div>
                </div>
                <div className='panel-footer'>
                </div>
            </Panel>
        );
    }
}

export default Login;