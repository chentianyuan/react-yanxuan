import React, { component } from 'React'
import { craeteStore } from 'redux'
import reducers from './store/reducer.js'
import { Route, HashRouter, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import Main from '@/containers/Main/Main'

// 在Router的根部根据合并的reducer生成并注入store
const store = craeteStore(reducers)

export default class extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <Provider store={store}>
                <HashRouter>
                    <React.Fragment>
                        <Route exact render={()=>(<Redirect to='/main/home'/>)}/>
                        <Route path='main' component={Main}/>
                        <Route exact path='/datil' component='' />
                    </React.Fragment>    
                </HashRouter>
            </Provider>
        )
    }
}