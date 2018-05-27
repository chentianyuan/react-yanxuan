import React, { Component } from 'React'
import { Route, NavLink } from 'react-router-dom'
import './style.less'

const navList = [
    {class:'icon-gifts',link:'/main/home',text:'严选'},
    {class:'icon-cart',link:'/mian/shopcart',text:'购物车'},
    {class:'icon-account',link:'/main/author',text:'我'}
]

export default class Main extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className='mainWrap'>
                <div className='router-view'>
                    <Route exact path='/main/home' component={ Home } />
                    <Route exact path='/main/story' component={ Story } />
                    <Route exact path='/main/service' component={ Service } />
                    <Route exact path='/main/shopcart' component={ Service } />
                    <Route exact path='/main/author' component={ Service } />
                </div>
                <nav className='App-nav'>
                    {
                        navList.map((val,index)=>{
                            return (
                                <NavLink exact activeClassName='active' className='App-nav-link' to={val.link}>
                                    <i className={`iconfont ${val.class}`}></i>
                                    <span className='text'>{val.text}</span>
                                </NavLink>)
                        })
                    }
                </nav>
            </div>
        )
    }
}