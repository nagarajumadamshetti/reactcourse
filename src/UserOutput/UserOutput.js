import React from 'react';
import './UserOutput.css'
const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{props.name}</p>
            <p>paragraph</p>
        </div>
    );
}
export default userOutput;