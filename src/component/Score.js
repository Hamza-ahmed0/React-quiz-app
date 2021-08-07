import React from 'react'
import TotalCorrect from './TotalCorrect';
import TotalIncorrect from './TotalIncorrect';

function Score(props) {
    return (
        <div className="scr">
            <h2>SCORE</h2>
            <TotalCorrect correct={props.correct}/>
            <TotalIncorrect inCorrect={props.inCorrect}/>
        </div>
    )
}

export default Score;
