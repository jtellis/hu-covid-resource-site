/*
Referenced: https://github.com/coopermaruyama/tableau-react
    Imported Tableau was used from this project
*/

import React, { useRef, useEffect, useState } from 'react';
import { render } from 'react-dom';

import tableau from './tableau-2.3.0';
import Resources from '../Resources';

function TableauViz ({ url, options={} }) {

    let containerRef = useRef(null);
    let [county, setCounty] = useState("");

    useEffect(() => {

        let viz = new tableau.Viz(containerRef.current, url, options);

        viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, (marksEvent) => {

            marksEvent.getMarksAsync().then((marks) => {

                let countyName = marks
                .flatMap(x => x.getPairs())
                .find(x => x.fieldName == "County")
                .value;

                setCounty(countyName);
            })
        });
    }, []);

    return (
        <div className="grid grid-cols-1 gap-4">
            <Resources county={county} />
            <div className="" ref={containerRef} />
        </div>
    );
}

export default TableauViz;
