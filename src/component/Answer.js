import React from 'react'

function Answer(props) {
    return (
        <div className="Ans">
        <div>
            <button  className="btnAns" type="button" onClick={ () => props.handleClick(props.choice)}>{props.answer}</button>
        </div>
        </div>
    )
}

export default Answer;
