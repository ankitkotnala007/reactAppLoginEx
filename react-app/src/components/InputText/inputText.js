import React from 'react';
import './inputText.scss';

class InputText extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }

    render(){
        return(
            <div className='input'>
                <input 
                    className='input-box'
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.setState({value:e.target.value})}  
                    ref={Input => this.input}
                    />
                    
            </div>
        );
    }
}

export default InputText;