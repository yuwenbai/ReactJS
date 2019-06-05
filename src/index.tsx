import * as React from "react";
import * as ReactDOM from "react-dom";
import {Hello} from './Hello';
import reducer from './store/reducers'; 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {Link,Route,BrowserRouter} from 'react-router-dom' 

import {Game} from './Game'
import {Home} from './ContainerComponents/Home'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
            <header>React Router v4 Browser Example</header>
            {/* 设置导航 */}
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </div>
            {/* 设置路由，实现页面切换 */}
            <div>
                <Route path="/" exact component={Hello}></Route>
                <Route path="/login" component={Game}></Route>
                <Route path="/logout" component={Home}></Route>
            </div>
        </BrowserRouter>
  {/* <Hello compiler="TypeScript" framework="React" /> */}
</Provider> ,
  document.getElementById("root")
);
  