import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TableauViz from './TableauViz';
import Submission from './Submission';

render (
    <React.StrictMode>
        <header>NYS COVID-19 Parent Portal</header>
        <nav></nav>
        <main>
        <Router>
            <Switch>
                <Route exact path="/">
                    <TableauViz url='https://public.tableau.com/views/NYSCovidDashboard/Sheet1' />
                </Route>
                <Route exact path="/submission">
                    <Submission />
                </Route>
            </Switch>
        </Router>
        </main>
        <footer>
            <i>NYS COVID-19 Parent Portal</i> was created during Hack Upstate XV.
        </footer>
    </React.StrictMode>,

    document.getElementById('app')
);
