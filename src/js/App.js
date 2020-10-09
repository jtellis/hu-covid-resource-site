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
                    <TableauViz url='https://public.tableau.com/views/NYSCovidParentPortal/Sheet1' />
                </Route>
                <Route exact path="/submission/:county">
                    <Submission />
                </Route>
            </Switch>
        </Router>
        </main>
        <footer>
            <i>NYS COVID-19 Parent Portal</i> was created during Hack Upstate XV.
            Learn more on <a className="underline" href="https://github.com/jtellis/hu-covid-resource-site#nys-covid-19-parent-portal">GitHub</a>.
        </footer>
    </React.StrictMode>,

    document.getElementById('app')
);
