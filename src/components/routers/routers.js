import React, { Component } from 'react';
import { WrappedSearchBarComponent } from '../mainIndex/searchBar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Watch from '../../../src/watch';
import { WrappedVideoList } from '../list/videoList';

export class Routers extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path = "/index" component = {WrappedSearchBarComponent} />
                    <Route path = "/list" component = {WrappedVideoList} />
                    <Route exact path = "/watch" component = {Watch} />
                </Switch>
            </Router>
        )
    }
}