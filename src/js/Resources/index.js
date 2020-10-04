import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { useHistory } from 'react-router-dom';

import firebase from '../firebase';

function Resources({ county }) {

    let history = useHistory();

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
            {county == "" && <h1 className="text-lg">Please select a county on the map to see or submit resources for that area.</h1>}
            {county != "" && <h1>Showing results for <span className="text-lg">{county} County</span></h1>}
            <ul className="border-l-2 border-blue-400 pl-4">
                {resources.map((r, i) => (
                    <li className="border-l-2 bg-gray-100 border-blue-300 m-2 p-2" key={i}>
                        Name: <span className="resc-field">{r.name}</span><br />
                        Description: <span className="resc-field">{r.description}</span><br />
                        URL: <span className="resc-field"><a href="{r.url}">{r.url}</a></span>
                    </li>
                ))}
            </ul>
            <div>
                {county != "" && <button className="border-2 bg-blue-300 m-4 p-2 rounded-lg" onClick={() => history.push(`/submission/${county}`)}>Submit a Resource</button>}
            </div>
        </div>
    );
    
}

export default Resources;
