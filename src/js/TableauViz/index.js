/*
Referenced: https://github.com/coopermaruyama/tableau-react
    Imported Tableau was used from this project
*/

import React, { useRef, useEffect } from 'react';
import { render } from 'react-dom';

import tableau from './tableau-2.3.0';

function TableauViz ({ url, options={} }) {

    let containerRef = useRef(null);

    useEffect(() => {
        let viz = new tableau.Viz(containerRef.current, url, options);
        viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, onMarksSelection);
    }, []);

    return (
        <div>
            <div ref={containerRef} />
        </div>
    );
}

function onMarksSelection(marksEvent) {
    return marksEvent.getMarksAsync().then(reportSelectedMarks);
}

function reportSelectedMarks(marks) {

    let countyName = marks
        .flatMap(x => x.getPairs())
        .find(x => x.fieldName == "County")
        .value;

    console.log("County name is: ", countyName);
}

export default TableauViz;
