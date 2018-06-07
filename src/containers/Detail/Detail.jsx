import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { chooseGoods } from '../../store/good.redux.js'
import { Link } from 'react-router-dom'
import './style.less'


const mapStateToProps = function(state){
    return {
        good: state.homeReducer        
    }
}

// 混入当前所选商品信息
const mapDispatchToProps = function(dispatch){
    return bindActionCreators({
        chooseGoods
    },dispatch)
}

class Detail extends Component {

    goBack(){
        this.props.history.goBack()
    }

    render(){
        const { good } = this.props
        console.log(good)
        return(
            <div className="detail-wrap">
                <section className="detail-pic">
                    <div>
                        <span onClick={()=>{this.goBack()}} className="toBack iconfont icon-back"></span>
                        <Link className="toHome iconfont icon-wxbzhuye" to="/main/home"></Link>
                        <span className="check iconfont icon-favorite"></span>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail)