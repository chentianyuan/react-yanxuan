import React, { Component } from 'react'
import './style.less'

const sotryList = [
    {storyPic:'https://kano.guahao.cn/u0e39631123',storyTil:'为什么这款药膏好评如潮?',storyContent:'军医大远红外理疗贴背后的故事'},
    {storyPic:'https://kano.guahao.cn/51030181363',storyTil:'为什么这款药膏好评如潮?',storyContent:'军医大远红外理疗贴背后的故事'},
    {storyPic:'https://kano.guahao.cn/ul637802869',storyTil:'为什么这款药膏好评如潮?',storyContent:'军医大远红外理疗贴背后的故事'}
]

class Story extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return (
            <React.Fragment>
                <div className="storyWrap">
                    <div className="story-list">
                        <ul>
                            {
                                sotryList.map((val,index)=>{
                                    return (
                                        <li className="story" key={index}>
                                            <div>
                                                <img src={val.storyPic} alt={val.storyTil}/>
                                            </div>
                                            <h3>{val.storyTil}</h3>
                                            <p>{val.storyContent}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="storyTip">
                    <p>没有更多了~</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Story