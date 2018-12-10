import React, { Component } from 'react';
import Route from './Route.js'
class Container extends Component {
  constructor() {
    super();
    this.setStep = this.setStep.bind(this);
    this.setScore = this.setScore.bind(this);
    this.setResume = this.setResume.bind(this);
    this.state = {
      step: 12,
      score: 20,
      hp: 0,
      name: '大便',
      gender: 1,
      skill_1: '噗噗',
      skill_2: '噗噗',
      skill_3: '噗噗',
      description: 'ef',
    }
  }
  setStep(i) {
    console.log(i);
    this.setState({ step: i });
  }
  setScore(i) {
    console.log(i);
    this.setState({ score: this.state.score+i });
    console.log(this.state.score);
  }
  setResume(table) {
    for(var i in table){
      if (table[i]) {
        this.setState({[i]:table[i]});
      }
    }
    this.setState({ step: 5 });
    console.log(this.state); 
  }
  render() { 
    return (
      <div className="body">
      <Route 
      step={this.state.step}
      name={this.state.name}
      setStep={this.setStep}
      setScore={this.setScore}
      setResume={this.setResume}



      />
      <div className="progress w-100">
          <div className="progress-bar" style={{width: this.state.score+'%'}}></div>
          </div>
      </div>

    );
  }
}

export default Container;