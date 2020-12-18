import React, { Component } from 'react';
import Search from './Search'
import Main from './Main'

class app1 extends Component {

    state={
        searchName:""
    }
    sendInput=(searchName)=>{
        this.setState({
            searchName
        })
    }


    render() {
        return (
            <div>
                <Search sendInput={this.sendInput}></Search>
                <Main searchName={this.state.searchName}></Main>
            </div>
        );
    }
}

export default app1;
