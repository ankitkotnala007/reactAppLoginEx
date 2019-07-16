import React from 'react';
import './togglebutton.scss';

class ToggleButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            istoggle:false
        };
    }

    render() {
        return ( 
          
                <label className="switch">
                    <input type="checkbox" onChange = {(e)=> this.setState({istoggle:!this.state.istoggle})} ref = {toggle => this.toggle}/>
                    <div> </div> 
                </label>
           
            );
    }
}

export default ToggleButton;