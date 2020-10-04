import React from 'react';
import { render } from 'react-dom';

import TableauReport from 'tableau-react';

render (
    <React.StrictMode>
        <header>Hack Upstate - COVID-19 Impact & Resources</header>
        <nav></nav>
        <main>
            <TableauReport url='https://public.tableau.com/views/NYSCovidDashboard/Sheet1' />
        </main>
        <footer>Created for Hack Upstate XV</footer>
    </React.StrictMode>,

    document.getElementById('app')
);
