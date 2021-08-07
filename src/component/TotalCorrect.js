import React from 'react'

function TotalCorrect(props) {
    return (
        <div className="crrct">
            <h3>Correct: {props.correct}</h3>
        </div>
    )
}

export default TotalCorrect;
