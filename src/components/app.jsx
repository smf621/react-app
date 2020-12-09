import React, { Component } from 'react';
import logo from '../logo.svg'
class app extends Component {
    render() {
        return (
            <div>
                <img className='logo' src={logo} alt=""/>
                <p>zhe shi yige p biaoqian</p>
            </div>
        );
    }
}

export default app;