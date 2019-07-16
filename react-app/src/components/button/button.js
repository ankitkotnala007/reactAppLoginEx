import React from 'react';
import './button.scss';

class Button extends React.Component{
    render(){
        return(
            <div className='box-button'>
                <button 
                    onClick={this.props.onHandleClick}
                    className='button'>
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default Button;