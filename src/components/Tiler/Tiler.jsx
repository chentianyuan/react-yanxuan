import React, { Component } from 'react'

export default class extends Component {
    render(){
        const { til } = this.props
        return(
            <div className="hot-til">
                <h2>{ til }</h2>
                <i className="iconfont icon-more"></i>
            </div>
        )
    }
}