import React from 'react';
import { render } from 'react-dom';

import TableauViz from './TableauViz';

render (
    <React.StrictMode>
        <header>NYS COVID-19 Parent Portal</header>
        <nav></nav>
        <main>
            <TableauViz url='https://public.tableau.com/views/NYSCovidDashboard/Sheet1' />
        </main>
        <footer>
            <i>NYS COVID-19 Parent Portal</i> was created during Hack Upstate XV.
        </footer>
    </React.StrictMode>,

    document.getElementById('app')
);
