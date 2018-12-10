import React, { Component } from 'react';
import Start from '../component/step/Start'
import { 
  Step01, Step02, Step03, Step05,
  Step06, Step07, Step09, Step10,
  Step11,Step12,Step13,
  } from '../component/step/TextStep'
import Resume from '../component/Resume';
import Chose01 from '../component/Chose01';
import Chose02 from '../component/Chose02';
import {Conversation01,Conversation02,Conversation03} from '../component/conversation/Conversation.js';
class Route extends Component {
  render() {
     switch (this.props.step) {
      case 1:
        return <Step01 setStep={this.props.setStep}/>;
      case 2:
        return <Step02 setStep={this.props.setStep}/>;
      case 3:
        return <Step03 setStep={this.props.setStep}/>;
      case 4:
        return <Resume submit={this.props.setResume}/>;
      case 5:
        return <Step05 setStep={this.props.setStep}/>;
      case 6:
        return <Step06 setStep={this.props.setStep}/>;
      case 7:
        return <Step07 setStep={this.props.setStep}/>;
      case 8:
        return <Chose01 setStep={this.props.setStep}/>;
      case 9:
        return <Step09 setStep={this.props.setStep}/>;
      case 10:
        return <Step10 setStep={this.props.setStep}/>;
      case 11:
        return <Step11 setStep={this.props.setStep}/>;
      case 12:
        return <Conversation01 setStep={this.props.setStep} name={this.props.name}/>;
      case 13:
        return <Step13 setStep={this.props.setStep}/>;
      case 14:
        return <Chose02 setStep={this.props.setStep} setScore={this.props.setScore}/>;
      case 15:
        return <Conversation02 setStep={this.props.setStep} name={this.props.name}/>;
      case 16:
        return <Conversation03 setStep={this.props.setStep}/>;
    }
    return (
      <Start setStep={this.props.setStep}/>
    );
  }
}

export default Route;
