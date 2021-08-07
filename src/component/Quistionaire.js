import React, { Component } from 'react'
import dataSet from '../api/dataSet'
import Quizarea from './Quizarea';
import Score from './Score';



class Quistionaire extends Component {

    constructor() {
        super();
        this.state = {
            current: 0,
            dataSet: dataSet,
            correct: 0,
            inCorrect: 0,
            isFinished: false,
        }
        this.handleClick= this.handleClick.bind(this);
    }
    
    handleClick(choice) {
      if(choice === this.state.dataSet[this.state.current].correct){
          this.setState({correct: this.state.correct + 1})
      }else {
          this.setState({inCorrect: this.state.inCorrect + 1})
      }


      if(this.state.current === this.state.dataSet.length - 1){
          this.setState({ isFinished: true})
      }else{
        this.setState({current: this.state.current + 1})
      }
    }


    



    render() {
        return (
            <div>
                <h1>QUIZ APP</h1>
                <Quizarea handleClick={this.handleClick} isFinished={this.state.isFinished} dataSet={this.state.dataSet[this.state.current]} correct={this.state.correct} inCorrect={this.state.inCorrect}/>
                <Score correct={this.state.correct} inCorrect={this.state.inCorrect}/>
            </div>
        )
    }
}

export default Quistionaire;
