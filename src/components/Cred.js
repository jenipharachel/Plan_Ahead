import React from 'react';

class Cred extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div id="name">
                <label name="name">Name:</label>
                <input type="text" placeholder="Enter your name" />
                </div>

                <div id="pw">
                <label name="password">Password:</label>
                <input type="text" placeholder="Enter your password" />
                </div>
            </React.Fragment>
        );
    }
}

export default Cred;