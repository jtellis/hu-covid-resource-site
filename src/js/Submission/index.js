import React from 'react';
import { render } from 'react-dom';

function Submission() {
    return (
        <form>
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
    );
}

export default Submission;
