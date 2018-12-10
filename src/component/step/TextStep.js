import React, {Component} from 'react';
import {BubbleText,Conversation} from '../BubbleText.js'

export class Step01 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(2)} className="bg step1 h-100 d-flex animated fadeIn">
      <BubbleText text="今天是你畢業後第一天 也是失業的第一天"/>
      </div>
    );
  }
}

export class Step02 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(3)} className="bg step1 h-100 d-flex animated fadeIn">
      <BubbleText text="你在103上面看見了一間很厲害很神秘很酷炫狂霸跩的公司 三滴人"/>
      </div>
    );
  }
}

export class Step03 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(4)} className="bg step1 h-100 d-flex animated fadeIn">
      <BubbleText 
        text="懷抱著統一世界的夢想 你決定投遞履歷試試看"/>
      </div>
    );
  }
}

export class Step05 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(6)} className="h-100 d-flex justify-content-center align-items-center">
      <h1 className="text-white animated fadeIn ">兩周後.....</h1>
      </div>
    );
  }
}

export class Step06 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(7)} className="bg step1 h-100 d-flex animated fadeIn">
      <BubbleText 
        text="經過了漫長的等待，在你即將放棄的時候,你終於收到了面試通知信, 一定要好好把握這個機會,進入三滴人！"/>
      </div>
    );
  }
}

export class Step07 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(8)} className="bg step1 h-100 d-flex animated fadeIn">
      <BubbleText 
        text="跟著郵件來到了路口，但裡面的路你卻不知道該怎麼走，這時候你..."/>
      </div>
    );
  }
}

export class Step09 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(0)} className="bg step1 h-100 d-flex animated fadeIn">
      <BubbleText 
        text="路人說他不是這裡的人，他也不知道路，你亂走一通迷路後已經超過面試時間了，只好放棄了這個面試機會。"/>
      </div>
    );
  }
}


export class Step10 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(0)} className="bg step1 h-100 d-flex animated fadeIn">
      <BubbleText 
        text="你把手機轉來轉去，繞了好大一圈，才發現天都暗了，你深深的覺得自己是智障，絕望的回家了。"/>
      </div>
    );
  }
}

export class Step11 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(12)} className="bg step1 h-100 d-flex animated fadeIn">
      <BubbleText 
        text="雖然浪費了一點時間繞路，但你順利的找到了車庫，也順利連絡上了三滴人的HR。"/>
      </div>
    );
  }
}
export class Step13 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(14)} className="bg step1 h-100 d-flex animated fadeIn">
      <BubbleText 
        text="等待的時間裡，你有點緊張，你決定做點什麼舒緩壓力?"/>
      </div>
    );
  }
}
