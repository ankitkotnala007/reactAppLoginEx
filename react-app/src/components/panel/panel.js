import React from 'react';
import './panel.scss';

import InputText from './../InputText/inputText';
import Button from './../button/button';
import TimeText from './../timeText/timetext';
import Switch from './../toggleButton/togglebutton';

class Panel extends React.Component{
    
    onHandleClick = ()=>{
        if(this.switch.state.istoggle)
        {    
            console.log(this.Input.state.value);
            console.log(this.password.state.value);
        }
    }

    render(){
        return(
            <div className='panel'>
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
            </div>
        );
    }
}

export default Panel;