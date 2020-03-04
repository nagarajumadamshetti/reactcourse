import React from 'react';
const userInput = (props) => {
    const style = {
        backgroundColor: "white",
        font: "Arial Black",
        border: "2px solid blue",
        padding: "8px",
        cursor: "pointer"
    }
    return (
        <div>
            <input
                style={style}
                type="text"
                onChange={props.changed}
                value={props.name} />
        </div>
    );
}
export default userInput;