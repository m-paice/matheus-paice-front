import React from "react";

import { Router } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";

import history from "../utils/history";

// pages
// import Home from "../pages/Home";
import SongsIndex from "../pages/Songs/SongsIndex";

interface Props {}

const Routes: React.FC<Props> = (props) => {
    return (
        <Router history={history}>
            <Switch>
                {/* <Route exact path="/" component={Home} /> */}

                <Route exact path="/songs" component={SongsIndex} />
            </Switch>
        </Router>
    );
};

export default Routes;
