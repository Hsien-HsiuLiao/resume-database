import React from 'react';

export const CandidateView = () => {
    return (
        <div>
            <h2>Hello candidate!</h2>

            <h3>Please fill out the fields below to submit your resume</h3>

            <div>Input resume: </div>
            <div>Input e-mail:</div>
            <div>(submit button)</div>
            <p />
            <div>Status: (pending, accepted/rejected)</div>
            <div>(if accepted) Please select interview time (submit button)</div>

        </div>
    )
}