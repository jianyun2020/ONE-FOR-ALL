import React from "react";
import {BrowserRouter as Router,Link, Switch, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Topics from "./Topics";

const BasisRouting = () => {

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/user"}>User</Link>
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

                <Route path={"/user"}>
                    <Topics />
                </Route>

                <Route path={"/"}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default BasisRouting
