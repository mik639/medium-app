// @flow
import React, {Component, type Node} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {history} from './libs/configureStore';

import {Home} from './pages/Home';
import {Category} from './pages/Category';
import {Product} from "./pages/Product";
import {Cart} from "./pages/Cart";
import style from './css/_layout.scss';
import {Menu} from './components/menu/Menu';

class App extends Component<PropsType> {

    render(): Node {
        const {wishesPopup} = this.props;
        return (
            <ConnectedRouter history={history}>
                <div className="App">
                    <header className={style.header}>
                        <Menu />
                    </header>

                    <Switch>
                        <Route path="/category/:id" component={Category} />
                        <Route path="/product" component={Product} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </ConnectedRouter>
        );
    }
}

export default connect()(App)