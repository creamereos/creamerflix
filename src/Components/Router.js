import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home/index";
import TV from "Routes/TV/index";
import Header from "Components/Header";
import Search from "Routes/Search/index";
import Detail from "Routes/Detail"

export default () => (
    <Router> 
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/show" component={TV} />
                <Route path="/search" component={Search} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/tv/:id" component={Detail} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);