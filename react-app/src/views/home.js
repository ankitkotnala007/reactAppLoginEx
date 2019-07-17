import React, { Component } from 'react'
import Header from '../components/header/header';
import Button from './../components/button/button';
class Home extends Component {

    onHandleClick = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Header/>
               <h1>Home </h1>
               <Button text='logout' onHandleClick={this.onHandleClick}/>
            </div>
        )
    }
}

export default Home;
