import React from 'react';

export const CandidateView = () => {
    return (
        <div>
            <h2>Hello candidate!</h2>

            <h3>Please fill out the fields below to submit your resume</h3>

            <form>
                <label for="fname">First name:</label><br />
                <input type="text" id="fname" name="fname"></input>
                <br />
                <label for="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname"></input>
                <br />
                <label for="email">Email:</label><br />
                <input type="email" id="email" name="email"></input>
                <p />
                <label for="resume">Resume:</label><br />
                <textarea name="message" rows="10" cols="30">
                
                    <input type="text" id="resume" name="resume"></input>
                </textarea>
                <br />
                
                <label for="myfile">Or select a file to upload resume:</label>
                <input type="file" id="myfile" name="myfile"></input>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
            <div>Input resume: </div>
            <div>Input e-mail:</div>
            <div>(submit button)</div>
            <p />
            <div>Status: (pending, accepted/rejected)</div>
            
            <div>(if accepted) Please select interview time (submit button)</div>
            <form>
                <label for="appt">Select a time:</label>
                <input type="time" id="appt" name="appt"></input>
            </form>
            <form>
                <label for="interviewDate">Date:</label>
                <input type="date" id="interviewDate" name="interviewDate"></input>
            </form>
        </div>
    )
}