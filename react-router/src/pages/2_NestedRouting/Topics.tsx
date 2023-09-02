import React from 'react';
import {useRouteMatch, Switch, Route, Link} from "react-router-dom";
import Topic from "./Topic";

const Topics = (props) => {
    const match = useRouteMatch()

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`} >Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`} >props-v-state</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.url}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={`${match.url}`}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    )
};

export default Topics;