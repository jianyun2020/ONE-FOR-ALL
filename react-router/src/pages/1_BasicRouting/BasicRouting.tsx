import React from "react";
import {BrowserRouter as Router,Link, Switch, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Topics from "../2_NestedRouting/Topics";

const NestedRouting = () => {

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/topics"}>Topics</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path={"/about"}>
                    <About />
                </Route>

                <Route path={"/topics"}>
                    <Topics />
                </Route>

                <Route path={"/"}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default NestedRouting
