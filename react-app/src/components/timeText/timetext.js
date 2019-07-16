import React from 'react';

class TimeText extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        };
    }

    componentDidMount(){
        this.countID = setInterval(() => {
           this.tick() 
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.countID);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }

    component

    render(){
        return(
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

export default TimeText;