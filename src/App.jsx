// @flow
import React, { Component, type Node } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { history } from "./libs/configureStore";

import { Home } from "./pages/Home";
import { CategoryConnected } from "./pages/Category";
import { Refs } from "./pages/Refs";
import { Lifecycles } from "./pages/Lifecycles";
import { AboutContext } from "./pages/Context";
import style from "./css/_layout.scss";
import { Menu } from "./components/menu/Menu";
import { Normalizr } from "./pages/Normalizr";
import ToDo from "./pages/Todo";

class App extends Component<PropsType> {
  render(): Node {
    const { wishesPopup } = this.props;
    return (
      <ConnectedRouter history={history}>
        <div className="App feature-2">
          <header className={style.header}>
            <Menu />
          </header>

          <Switch>
            <Route path="/category" component={CategoryConnected} />
            <Route path="/refs" component={Refs} />
            <Route path="/lifecycles" component={Lifecycles} />
            <Route path="/normalizr" component={Normalizr} />
            <Route path="/context" component={AboutContext} />
            <Route path="/todo" component={ToDo} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default connect()(App);
