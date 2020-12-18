import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Search extends Component {
    static propTypes ={
        sendInput:PropTypes.func.isRequired
    }
    
    search=()=>{
        //输入的值
        const searchName = this.inputVal.value
        let {sendInput}= this.props 
        if(searchName){
            sendInput(searchName)
        }
      
    }

    render() {
   
      
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={el=>this.inputVal = el} />
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;
