import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Header from '@/components/Header/Header.jsx'
import Homenav from '@/components/Mainnav/Mainnav.jsx'
import Home from './Home/Home.jsx'
import Story from './Story/Story.jsx'
import Service from './Service/Service.jsx'
import ShopCart from './ShopCart/ShopCart.jsx'
import '@/static/css/common.less'
import './style.less'

const navList = [
    {class:'icon-gifts',link:'/main/home',text:'严选'},
    {class:'icon-cart',link:'/main/shopcart',text:'购物车'},
    {class:'icon-account',link:'/author',text:'我'}
]

export default class Main extends Component {
    constructor (props) {
        super(props)
        this.state = {
            
        }
    }

    render () {
        // navList[0].link = this.props.location.pathname
        return (
            <div className='mainWrap'>
                <Header></Header>
                <div className='router-view'>
                    <Route path="/main/home" component={ Homenav }/>
                    <Route exact path='/main/home' component={ Home } />
                    <Route exact path='/main/home/story' component={ Story } />
                    <Route exact path='/main/home/service' component={ Service } />
                    <Route exact path='/main/shopcart' component={ ShopCart } />
                </div>
                <nav className='App-nav'>
                    {
                        navList.map((val,index)=>{
                            return (
                                <NavLink activeClassName='active' className='App-nav-link' to={val.link} key={index}>
                                    <i className={`iconfont ${val.class}`}></i>
                                    <span className='text'>{val.text}</span>
                                </NavLink>
                            )
                        })
                    }
                </nav>
            </div>
        )
    }
}