import React, { useState } from 'react';
import { render } from 'react-dom';
import { useParams, useHistory } from 'react-router-dom';

import firebase from '../firebase';

function Submission() {

    let { county }= useParams();

    let submissions = firebase.firestore()
        .collection('submissions');

    return (
        <div>
            <h1>Please provide some information for this resource in {county} County.</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                   <input
                      id="name"
                      name="name"
                      type="text"
                      maxLength="50"
                      required
                    ></input>
                </div>

                <div className="field">
                    <label htmlFor="description">Description</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        maxLength="75"
                        required
                    ></input>
                </div>

                <div className="field">
                    <label htmlFor="url">URL</label>
                    <input
                        id="url"
                        name="url"
                        type="url"
                        placeholder="https://example.com"
                        pattern="https?://.*"
                        size="30"
                    ></input>
                </div>

                <input type="button" value="Cancel" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );

    function handleSubmit(e) {
        
        e.preventDefault();
        let formData = new FormData(e.target);
        let submission = {};
        for (var pair of formData.entries()) {
            submission[pair[0]] = pair[1];
        }
        submission.county = county;

        submissions.add(submission);
        // TODO: Nav to main page
    }
}

export default Submission;
