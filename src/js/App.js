import React from 'react';
import { render } from 'react-dom';

import TableauReport from 'tableau-react';

render (
    <React.StrictMode>
        <TableauReport url='https://public.tableau.com/views/NYSCovidDashboard/Sheet1' />
    </React.StrictMode>,

    document.getElementById('app')
);
