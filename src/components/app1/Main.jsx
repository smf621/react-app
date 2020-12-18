import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'

class Main extends Component {
    static propTypes = {
        searchName: PropTypes.string.isRequired
    }

    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }
    //当组件接收到新的参数
    componentWillReceiveProps(newProps) {
        const { searchName } = newProps
        this.setState({
            initView: false,
            loading: true
        })
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url).then(res => {
            const data = res.data
            console.log(data);
            const users = data.items.map(item=>{
                return {name:item.login,url:item.html_url,avatarUrl:item.avatar_url}
            })
            this.setState({loading:false,users})
        }).catch(err => {
            this.setState({loading:false,errorMsg:err.message})
        })
    }

    render() {
        let { initView, loading, users, errorMsg } = this.state
        let { searchName } = this.props
        if (initView) {
            return <h2>请输入关键字进行搜索:{searchName}</h2>
        } else if (loading) {
            return <h2>正在请求中。。。</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((item, index) => {
                            return (
                                <div className="card" key={index}>
                                    <a href={item.url} target="_blank">
                                        <img src={item.avatarUrl} style={{ width: 100 }} />
                                    </a>
                                    <p className="card-text">{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            );
        }
    }
}

export default Main;
