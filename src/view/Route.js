import React, { Component } from 'react';
import Start from '../component/step/Start';
import {
  Step01,
  Step02,
  Step03,
  Step05,
  Step06,
  Step07,
  Step09,
  Step10,
  Step11,
  Step13,
  Step14,
  Step15,
  Step16,
  Step17,
  Step18,
  Step19,
  Step20,
  Step21,
  Step22,
  Step23,
  Step24,
  Step25,
  Step26,
  Step27,
} from '../component/step/TextStep';
import Resume from '../component/Resume';
import { Exam1, Exam2, Exam3, Exam4, Exam5 } from '../component/Test.js';
import { GoodEnd, BadEnd} from '../component/End.js';
import Chose01 from '../component/Chose01';
import Chose02 from '../component/Chose02';
import Chose03 from '../component/Chose03';
import Chose04 from '../component/Chose04';
import Chose05 from '../component/Chose05';
import Chose06 from '../component/Chose06';
import Chose07 from '../component/Chose07';
import Chose08 from '../component/Chose08';
import {
  Conversation01,
  Conversation02,
  Conversation03,
  Conversation04,
  Conversation05,
  Conversation06,
  Conversation07,
  Conversation08,
  Conversation09,
  Conversation10,
  Conversation11,
  Conversation12,
  Conversation13,
  Conversation14,
  Conversation15,
  Conversation16,
  Conversation17,
  Conversation18,
  Conversation19,
  Conversation20,
  Conversation21,
  Conversation22,
} from '../component/conversation/Conversation.js';
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
        return <Conversation02 setStep={this.props.setStep}/>;
      case 16:
        return <Conversation03 setStep={this.props.setStep} name={this.props.name}/>;
      case 17:
        return <Exam1 setStep={this.props.setStep} setAnswer={this.props.setAnswer}/>;
      case 18:
        return <Exam2 setStep={this.props.setStep} setAnswer={this.props.setAnswer}/>;
      case 19:
        return <Exam3 setStep={this.props.setStep} setAnswer={this.props.setAnswer}/>;
      case 20:
        return <Exam4 setStep={this.props.setStep} setAnswer={this.props.setAnswer}/>;
      case 21:
        return <Exam5 setStep={this.props.setStep} setAnswer={this.props.setAnswer}/>;
      case 22:
        return <Conversation04 setStep={this.props.setStep} name={this.props.name} calculate={this.props.calculate}/>;
      case 23:
        return <Step14 setStep={this.props.setStep}/>;
      case 24:
        return <Conversation05 setStep={this.props.setStep} name={this.props.name}/>;
      case 25:
        return <Conversation06 setStep={this.props.setStep} name={this.props.name}/>;
      case 26:
        return <Conversation07 setStep={this.props.setStep} name={this.props.name}/>;
      case 27:
        return <Conversation08 setStep={this.props.setStep} name={this.props.name}/>;
      case 28:
        return <Chose03 setStep={this.props.setStep} name={this.props.name} setScore={this.props.setScore}/>;
      case 29:
        return <Conversation09 setStep={this.props.setStep} name={this.props.name}/>;
      case 30:
        return <Conversation10 setStep={this.props.setStep} name={this.props.name}/>;
      case 31:
        return <Step15 setStep={this.props.setStep}/>;
      case 32: //OEO
        return <Conversation11 setStep={this.props.setStep} name={this.props.name}/>;
      case 33: //回答OEO
        return <Chose04 setStep={this.props.setStep} setScore={this.props.setScore}/>;
      case 34:
        return <Conversation12 setStep={this.props.setStep} name={this.props.name}/>;
      case 35:
        return <Conversation13 setStep={this.props.setStep} gender={this.props.gender} setScore={this.props.setScore}/>;
      case 36: //批拉巴拉崩
        return <Chose05 setStep={this.props.setStep} setScore={this.props.setScore}/>;
      case 37:
        return <Conversation14 setStep={this.props.setStep}/>;
      case 38:
        return <Conversation15 setStep={this.props.setStep} skill_1={this.props.skill_1} skill_2={this.props.skill_2} skill_3={this.props.skill_3}/>;
      case 39:
        return <Conversation16 setStep={this.props.setStep}/>;
      case 40: //耕田選擇
        return <Chose06 setStep={this.props.setStep} setScore={this.props.setScore}/>;
      case 41: //打打了解
        return <Conversation17 setStep={this.props.setStep}/>;
      case 42: //一個小時後
        return <Step16 setStep={this.props.setStep}/>;
      case 43: //打打了解
        return <Conversation17 setStep={this.props.setStep}/>;
      case 44: //最後還有什麼問題嗎
        return <Conversation18 setStep={this.props.setStep}/>;
      case 45: //最後問題
        return <Chose07 setStep={this.props.setStep} setScore={this.props.setScore} name={this.props.name}/>;
      case 46: //good question
        return <Conversation19 setStep={this.props.setStep}/>;
      case 47: //備註
        return <Conversation20 setStep={this.props.setStep} description={this.props.description}/>;
      case 48: //時麼意思
        return <Chose08 setStep={this.props.setStep} setScore={this.props.setScore}/>;
      case 49: //了解今天真的很謝謝你
        return <Conversation21 setStep={this.props.setStep} name={this.props.name}/>;
      case 50: //我們會再寄通知信給你
        return <Conversation22 setStep={this.props.setStep} name={this.props.name}/>;
      case 51: //你愉快的結束了談話
        return <Step17 setStep={this.props.setStep}/>;
      case 52: //兩周後
        return <Step18 setStep={this.props.setStep}/>;
      case 53: //你收到了來自三滴人的郵件(點開)
        return <Step19 setStep={this.props.setStep} score={this.props.score}/>;
      case 54: //很遺憾你..(信的內容)
        return <Step20 setStep={this.props.setStep}/>;
      case 55: //很開心你..(信)
        return <Step21 setStep={this.props.setStep}/>;
      case 56: //隱藏結局..(恭喜你!!!)
        return <Step22 setStep={this.props.setStep}/>;
      case 57: //隱藏結局..(影片?)
        return <Step23 setStep={this.props.setStep}/>;
      case 58: //隱藏結局1打打
        return <Step24 setStep={this.props.setStep}/>;
      case 59: //隱藏結局2解咪
        return <Step25 setStep={this.props.setStep}/>;
      case 60: //隱藏結局31OEO
        return <Step26 setStep={this.props.setStep}/>;
      case 61: //隱藏結局3人
        return <Step27 setStep={this.props.setStep}/>;
      case 62: //通關成功 準備上班囉!
        return <GoodEnd setStep={this.props.setStep}/>;
      case 63: //通關失敗 再回去逛逛103吧
        return <BadEnd setStep={this.props.setStep}/>;
      default:
    }
    return (
      <Start setStep={this.props.setStep} init={this.props.init}/>
    );
  }
}

export default Route;