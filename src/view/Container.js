import React, { Component } from 'react';
import Route from './Route.js'
class Container extends Component {
  constructor() {
    super();
    this.setStep = this.setStep.bind(this);
    this.setScore = this.setScore.bind(this);
    this.setResume = this.setResume.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
    this.calculate = this.calculate.bind(this);
    this.ending = this.ending.bind(this);
    this.state = {
      step: 0,
      score: 25,
      hp: 0,
      name: '大便',
      gender: 1,
      skill_1: '噗噗',
      skill_2: '大便',
      skill_3: '吃大便',
      description: '我好慌啊',
    }
    this.exam = {
      1: { answer: 3, user: '' },
      2: { answer: 2, user: '' },
      3: { answer: 2, user: '' },
      4: { answer: 3, user: '' },
      5: { answer: 3, user: '' },
    }
  }
  setStep(i) {
    console.log(i);
    this.setState({ step: i });
  }
  setScore(i) {
    console.log(i);
    this.setState({ score: this.state.score + i });
    console.log(this.state.score);
  }
  setResume(table) {
    console.log(table);
    for (var i in table) {
      if (table[i]) {
        this.setState({
          [i]: table[i] });
      }
    }
    this.setState({ step: 5 });
    console.log(this.state);
  }
  setAnswer(i, answer) {
    this.exam[i].user=answer;
    console.log(this.exam);
  }
  calculate(){
    var score=0
    for(var i in this.exam){
      if (this.exam[i].answer==this.exam[i].user) {
        score+=5;
      }
    }
    this.setState({ score: this.state.score + score });
    console.log(score);
  }
  ending(){
    var score=0
    for(var i in this.exam){
      if (this.exam[i].answer==this.exam[i].user) {
        score+=5;
      }
    }
    this.setState({ score: this.state.score + score });
    console.log(score);
  }
  render() {
    return (
      <div className="body">
        <Route 
        score={this.state.score}
        step={this.state.step}
        name={this.state.name}
        skill_1={this.state.skill_1}
        skill_2={this.state.skill_2}
        skill_3={this.state.skill_3}
        description={this.state.description}
        gender={this.state.gender}
        setStep={this.setStep}
        setScore={this.setScore}
        setResume={this.setResume}
        setAnswer={this.setAnswer}
        calculate={this.calculate}


        />
        {this.state.step>11&&<div className="progress w-100">
          <div className="progress-bar" style={{width: this.state.score+'%'}}></div>
        </div>}
      </div>

    );
  }
}

export default Container;