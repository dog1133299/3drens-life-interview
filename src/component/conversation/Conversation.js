import React, { Component } from 'react';
import {Conversation} from '../BubbleText.js'

export class Conversation01 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(13)}>
        <div>
          <img src="img/jammy01.png" className="character slideInLeft animated"/>
          <Conversation
            text={'哈囉'+this.props.name+'你來了，我是解咪，麻煩妳先在會議室等我們一下吧!'}
          />
        </div>
      </div>
    );
  }
}


export class Conversation02 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(16)}>
        <div>
          <img src="img/cd01.png" className="character slideInLeft animated"/>
          <Conversation
            text={'....哈囉'+this.props.name+'，我是中打。'}
          />
        </div>
      </div>
    );
  }
}


export class Conversation03 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(17)}>
        <div>
          <img src="img/cd02.png" className="character"/>
          <Conversation
            text={'這裡有一份題目，可能要麻煩妳先填一下。'}
          />
        </div>
      </div>
    );
  }
}


