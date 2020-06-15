import React from "react";

const charComponent = (props) => {
    const style = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "10px",
        border: "1px solid black",
        // backgroundColor: "blue"
    }

    const char = props.char;
    return (
        <span style={style} onClick={props.click}>{char}</span>
    )


}
export default charComponent;