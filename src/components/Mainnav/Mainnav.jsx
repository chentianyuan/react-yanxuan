
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.less'

const navList = [
    {link:'/main/home/story',text:'故事'},
    {link:'/main/home',text:'好货'},
    {link:'/main/home/service',text:'服务'}
]

export default class extends Component {
    render(){
        return(
            <nav className="mainNav">
                <i className="iconfont icon-category"></i>
                <div className="navLink">
                    {
                        navList.map((val,index)=>{
                            return (
                                <NavLink exact activeClassName='active' className='App-nav-link' to={val.link} key={index}>
                                    <span className='text'>{val.text}</span>
                                </NavLink>
                            )
                        })
                    }
                </div>
                <i className="iconfont icon-cart"></i>                
            </nav>
        )
    }
}