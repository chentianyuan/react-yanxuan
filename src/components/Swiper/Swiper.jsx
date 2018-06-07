import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'
import './style.less'

export default class extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0
        }
    }
    handleClickDot(index){
        // this.swiper作为ref的回调函数，在ref挂载时被触发设置成swiper节点
        // 调用react-swiper的slideAPI
        this.swiper.swipe.slide(index)
    }
    render(){
        const swipeOpt = {
            callback: (index) => {
                this.setState({
                    index
                })
            },
            speed: 300,
            continuous: true,
            auto: 3000
        }
        const { list } = this.props
        return(
            <div className="swiper-wrapper">
                <ReactSwipe className="card-slide" ref={ref => this.swiper = ref} swipeOptions={swipeOpt}>
                    {
                        list.map((image,index) => {
                            return (
                                <div key={index} className="swiper-item">
                                    <img className="swiper-image" src={image} alt="img"/>
                                </div>
                            )
                        })
                    }
                </ReactSwipe>
                <div className="swiper-dots">
                    {
                        list.map((val, index) => {
                            return (
                                <span key={index} className={index===this.state.index?'active':''} onClick={()=>{this.handleClickDot(index)}} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}