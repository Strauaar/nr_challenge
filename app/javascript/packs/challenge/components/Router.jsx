import React, { PureComponent } from 'react';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom'
import App from './App';

class Router extends PureComponent {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={App} />
                </div>
            </BrowserRouter>
        )
    }
}

export default Router;