import React from 'react'
import Question from './question';
import AnswerList from './AnswerList';
import UserGreetings from './UserGreetings';
import GreetFail from './greetfail';

function Quizarea(props) {

  if (props.isFinished && props.correct > 1) { 
      return (<UserGreetings />)
  }else if (props.isFinished && props.inCorrect > 1){
      return <GreetFail/>
  }
    return (
        <div>
            <Question dataSet={props.dataSet} />
            <AnswerList dataSet={props.dataSet} handleClick={props.handleClick}/>
        </div>
    )
}

export default Quizarea;
