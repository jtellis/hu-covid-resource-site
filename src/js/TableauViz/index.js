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
            <div className="map" ref={containerRef} />
          <div className="grid grid-cols-1">
            <div className="about-map">
                <div className="expl-header">
                    About this map
                </div>
                <div className="explaination">
                    This map is generated through analyzing a combination of school funding and covid 19 infection rates at a county level. By giving each of the counties a rating based on how much they spend per student, with lower being worse, and based on covid 19 infections with respect to population, we've generated an assessment as to which counties are most susceptible to academic hardships during the pandemic, given on a scale from 0 to 1. Hovering over a location will give you the susceptibility rating and clicking it will show the resources available for that county.
                </div>
            </div>
            </div>
        </div>
    );
}

export default TableauViz;
