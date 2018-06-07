import React, { Component } from 'react'
import { createStore } from 'redux'
import reducers from '@/store/reducer.js'
import { Route, HashRouter, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import Main from '@/containers/Main/Main'
import Detail from '@/containers/Detail/Detail'

// 在Router的根部根据合并的reducer生成并注入store
const store = createStore(reducers)

export default class extends Component {
    render () {
        return (
            <Provider store={store}>
                <HashRouter>
                    <React.Fragment>
                        <Route exact path='/' render={()=>(<Redirect to='/main/home'/>)}/>
                        <Route path='/main' component={ Main }/>
                        <Route exact path='/detail' component={ Detail } />
                        <Route exact path='/shopcart' component={ Main } />
                        <Route exact path='/author' component={ Main } />
                    </React.Fragment>    
                </HashRouter>
            </Provider>
        )
    }
}