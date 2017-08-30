
import 'babel-polyfill'
import React,{Component,PropTypes}  from 'react'
import { render } from 'react-dom'
import { Router, useRouterHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createHashHistory ,createHistory} from 'history'
import routes from './routes'


const store = configureStore()
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const history = syncHistoryWithStore(appHistory, store)
// const history = useRouterHistory(createHistory)({ basename: '/' })

class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  componentDidMount(){

  }
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    )
  }
}

render(
  <Root store={store} history={history} />,
  document.getElementById('_root')
)
