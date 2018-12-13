import React, {Component} from 'react';
import {BubbleText,Conversation} from '../BubbleText.js'

export class Step01 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(2)} className="bg step1 h-100 d-flex animated fadeIn">
      <BubbleText text="今天是你失業的第一天，也是你成為無業遊民的第一天。"/>
      </div>
    );
  }
}

export class Step02 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(3)} className="bg step2 h-100 d-flex animated fadeIn">
      <BubbleText text="你在087上面看見了一間，很厲害很神秘很酷炫狂霸跩的公司 三滴人。"/>
      </div>
    );
  }
}

export class Step03 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(4)} className="bg step2 h-100 d-flex">
      <BubbleText 
        text="懷抱著不再吃泡麵度日的卑微夢想，你決定投遞履歷試試看。"/>
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
      <div onClick={()=>this.props.setStep(7)} className="bg step3 h-100 d-flex animated fadeIn">
      <BubbleText 
        text="經過了漫長的等待，在你即將放棄的時候,你終於收到了面試通知信！"/>
      </div>
    );
  }
}

export class Step07 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(8)} className="bg step4 h-100 d-flex animated fadeIn">
      <BubbleText 
        text="你跟著通知信來面試，來到了附近卻發現你鬼打牆了，這時候你..."/>
      </div>
    );
  }
}

export class Step09 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(63)} className="bg step7 h-100 d-flex animated fadeIn">
      <BubbleText 
        text="路人說他不是這裡的人，他也不知道路，你亂走一通迷路後已經超過面試時間了，只好放棄了這個面試機會。"/>
      </div>
    );
  }
}


export class Step10 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(63)} className="bg step9 h-100 d-flex animated fadeIn">
      <BubbleText 
        text="你把手機轉來轉去，繞了好大一圈，才發現天都暗了，你深深的覺得自己是智障，絕望的回家了。"/>
      </div>
    );
  }
}

export class Step11 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(12)} className="bg step6 h-100 d-flex animated fadeIn">
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

export class Step14 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(24)} className="bg step1 h-100 d-flex animated fadeIn">
      <BubbleText 
        text="打打看完你的考券，轉身出去，過了一會兒，三個奇怪的人進來了。"/>
      </div>
    );
  }
}

export class Step15 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(24)} className="bg step10 h-100 d-flex animated fadeIn">
      <BubbleText 
        text="你拿起包包匆匆忙忙地離開了，你被嚇得半死，決定再也不來這裡找工作了。"/>
      </div>
    );
  }
}


export class Step16 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(44)} className="h-100 d-flex justify-content-center align-items-center">
      <h1 className="text-white animated fadeIn ">一個小時後.....</h1>
      </div>
    );
  }
}

export class Step17 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(52)} className="bg step10 h-100 d-flex animated fadeIn">
      <BubbleText 
        text="你愉快的離開了車庫，今天的面試讓你印象深刻，不知道到底能不能被錄取呢?"/>
      </div>
    );
  }
}


export class Step18 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(53)} className="h-100 d-flex justify-content-center align-items-center">
      <h1 className="text-white animated fadeIn ">一周後.....</h1>
      </div>
    );
  }
}

export class Step19 extends Component {
  handleClick=()=>{
    if (this.props.score>=95) {
      this.props.setStep(56);
    }else if(this.props.score>=70){
      this.props.setStep(55);
    }else{
      this.props.setStep(54);
    }
  }
  render() {
    return (
      <div onClick={this.handleClick} className="bg step1 h-100 d-flex justify-content-center align-items-center animated fadeIn">
      <div className="text-center">
      <i className="fa fa-envelope-o fa-5x ruby-text-yellow-hover-1  pointer">
      </i>
      <h1>你收到了來自三滴人的郵件!</h1>
      </div>
      </div>
    );
  }
}

export class Step20 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(63)} className="bg step1 h-100 d-flex justify-content-center align-items-center">
      <div className="text-center animated zoomIn">
       jcp3u黑遺憾你錄取
      </div>
      </div>
    );
  }
}

export class Step21 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(62)} className="bg step1 h-100 d-flex justify-content-center align-items-center">
      <div className="text-center animated zoomIn">
       j恭喜你錄取
      </div>
      </div>
    );
  }
}
export class Step22 extends Component {
  render() {
    return (
      <div onClick={()=>this.props.setStep(62)} className="bg step1 h-100 d-flex justify-content-center align-items-center">
      <div className="text-center animated zoomIn">
       恭喜!!!!!!!!!!
      </div>
      </div>
    );
  }
}