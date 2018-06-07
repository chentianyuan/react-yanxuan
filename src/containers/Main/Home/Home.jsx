import React, { Component } from 'react'
import Swiper from '@/components/Swiper/Swiper.jsx'
import Tiler from '@/components/Tiler/Tiler.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { chooseGoods } from '../../../store/good.redux.js'
import './style.less'

const swipeImgList = [
    "https://kano.guahao.cn/4MU29899688",
    "https://kano.guahao.cn/4CX40136960",
    "https://kano.guahao.cn/FYZ38433048"
]

const hotList = [
    {goodsName:'正安中医 排寒祛湿优质艾叶足贴  10帖/盒',price:'39.90',range:'1',imgSrc:"https://kano.guahao.cn/XVS31865125?webp=80"},
    {goodsName:'正安中医 排寒祛湿优质艾叶足贴  10帖/盒',price:'39.90',range:'2',imgSrc:"https://kano.guahao.cn/XVS31865125?webp=80"},
    {goodsName:'正安中医 排寒祛湿优质艾叶足贴  10帖/盒',price:'39.90',range:'3',imgSrc:"https://kano.guahao.cn/XVS31865125?webp=80"}
]

const likeList = [
    {goodsName:'悦享健康计划',price:'2400.00',imgSrc:"https://kano.guahao.cn/2dV30608972?webp=80"},
    {goodsName:'悦享健康计划',price:'2400.00',imgSrc:"https://kano.guahao.cn/2dV30608972?webp=80"},
    {goodsName:'悦享健康计划',price:'2400.00',imgSrc:"https://kano.guahao.cn/2dV30608972?webp=80"},
    {goodsName:'悦享健康计划',price:'2400.00',imgSrc:"https://kano.guahao.cn/2dV30608972?webp=80"}            
]

const mapStateToProps = function(state){
    return {
        good: state.homeReducer.targetGoods
    }
}

const mapDispatchToProps = function(dispatch){
    // 使用 dispatch 对每个 action creator 进行包装，以便可以直接调用它们。
    return bindActionCreators({
            chooseGoods
        }, dispatch)
}

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    linktoGoods(item){
        const { chooseGoods } = this.props
        chooseGoods(item)
        this.props.history.push('/detail')
    }
    render(){
        // console.log(this.props)
        return(
            <div className="mainHome">
                <Swiper list={swipeImgList}></Swiper>
                <Tiler til="热销榜"></Tiler>
                <section className="hot-sale clearfix">
                    {
                        hotList.map((item,index)=>{
                            return(
                                <a onClick={()=>{this.linktoGoods(item)}} className={`hot-${item.range}`} key={index}>
                                    <h3>{item.goodsName}</h3>
                                    <p>{item.price}<i>元</i></p>
                                    <span>TOP{item.range}</span>
                                    <img src={item.imgSrc} alt="goods"/>
                                </a>
                            )
                        })
                    }
                </section>
                <Tiler til="猜你喜欢"></Tiler>   
                <section className="hope-like">
                    <ul>
                        {
                            likeList.map((item,index)=>{
                                return(
                                    <li onClick={()=>{this.linktoGoods(item)}} className={`hot-${item.range}`} key={index}>
                                        <img src={item.imgSrc} alt="goods"/>
                                        <h3>{item.goodsName}</h3>
                                        <p><i>￥</i>{item.price}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>             
            </div>
        )
    }
}

// 将 redux 中所需的 state 和所需的 action creator 混入组件，connect 使用的是装饰者模式，在不影响Home的前提下将redux注入
export default connect(mapStateToProps,mapDispatchToProps)(Home)