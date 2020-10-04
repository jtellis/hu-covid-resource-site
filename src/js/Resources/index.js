import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import firebase from '../firebase';

function Resources({ county }) {

    let [resources, setResources] = useState([]);

    let subsCollection = firebase.firestore()
        .collection('submissions')
        .where('county', '==', county)

    useEffect(() => {
        if (county !== "") {
            subsCollection.get()
                .then(docs => {
                    let rescData = [];
                    docs.forEach(doc => {
                        rescData.push(doc.data());
                    });
                    setResources(rescData);
                });
        }
    }, [county])

    return (
        <div className="">
            {county == "" && <h1>Please select a county on the map to see resources for that area.</h1>}
            {county != "" && <h1>Showing results for <span className="text-lg">{county} County</span></h1>}
            <ul className="border-l-2 border-blue-400 pl-4">
                {resources.map((r, i) => (
                    <li className="border-l-2 border-blue-300 p-4" key={i}>
                        Name: {r.name}<br />
                        Description: {r.description}<br />
                        URL: {r.url}
                    </li>
                ))}
            </ul>
        </div>
    );
    
}

export default Resources;
