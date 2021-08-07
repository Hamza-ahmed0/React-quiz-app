import React from 'react'

function TotalIncorrect(props) {
    return (
        <div className="incrrct">
            <h3>InCorrect: 
                {props.inCorrect}
            </h3>
        </div>
    )
}

export default TotalIncorrect;
