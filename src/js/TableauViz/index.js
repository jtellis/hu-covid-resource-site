/*
Referenced: https://github.com/coopermaruyama/tableau-react
    Imported Tableau was used from this project
*/

import React, { useRef, useEffect, useState } from 'react';
import { render } from 'react-dom';

import tableau from './tableau-2.3.0';

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
            <div className="">
                {county == "" && <h1>Please select a county on the map to see resources for that area.</h1>}
                {county != "" && <h1>Showing results for <span className="text-lg">{county} County</span></h1>}
            </div>
            <div className="" ref={containerRef} />
        </div>
    );
}

export default TableauViz;
