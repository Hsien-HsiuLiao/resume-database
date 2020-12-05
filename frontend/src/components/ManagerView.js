import React from 'react';

export const ManagerView = () => {
    return (
        <div>
            <h1>Welcome, (manager) Available resumes</h1>

            <li>candidate 1: (resume text)
            </li>
            <form action="isInterested()">
                <input type="checkbox" id="interested" name="interested" value="Interested">
                </input>
                <label for="interested">Interested</label><br />
                <input type="submit" value="Submit">
                </input>
            </form>

            <li>candidate 2: (resume text)
            </li>
            <form action="isInterested()">
                <input type="checkbox" id="interested" name="interested" value="Interested">
                </input>
                <label for="interested">Interested</label><br />
                <input type="submit" value="Submit">
                </input>
            </form>

            <li>candidate 3: (resume text)
            </li>
            <form action="isInterested()">
                <input type="checkbox" id="interested" name="interested" value="Interested">
                </input>
                <label for="interested">Interested</label><br />
                <input type="submit" value="Submit">
                </input>
            </form>
        </div>
    )
}