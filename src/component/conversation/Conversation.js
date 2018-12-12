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
          <img src="img/cd02.png" className="character slideInLeft animated"/>
          <Conversation
            text={'.......................(好像有人透過玻璃在偷看你)。'}
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
            text={'哈囉'+this.props.name+'，我是打打，這裡有一份題目，可能要麻煩妳先寫一下。'}
          />
        </div>
      </div>
    );
  }
}


export class Conversation04 extends Component {
  componentDidMount(){
    this.props.calculate();
  }
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(23)}>
        <div>
          <img src="img/cd02.png" className="character slideInLeft animated"/>
          <Conversation
            text={'嗯....好的，我大概了解了。'}
          />
        </div>
      </div>
    );
  }
}

export class Conversation05 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(25)}>
        <div>
          <img src="img/3drens01.png" className="character slideInRight animated"/>
          <Conversation
            text={'哈囉~~~'+this.props.name}
          />
        </div>
      </div>
    );
  }
}

export class Conversation06 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(26)}>
        <div>
          <img src="img/oeo01.png" className="character slideInLeft animated"/>
          <Conversation
            text={'嗨'+this.props.name+'，我是喔唷，是三維人的膝一喔，主要負責跟學長說你好，還有台上台下打招呼的部分。'}
          />
        </div>
      </div>
    );
  }
}
export class Conversation07 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(27)}>
        <div>
          <img src="img/cd03.png" className="character slideInLeft animated"/>
          <Conversation
            text={'嗨嗨'+this.props.name+'，剛剛打過招呼了，我是打打，是膝踢喔，主要負責耕田，是三維人的碼農頭頭。'}
          />
        </div>
      </div>
    );
  }
}
export class Conversation08 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(28)}>
        <div>
          <img src="img/jammy02.png" className="character slideInLeft animated"/>
          <Conversation
            text={'我是解咪，是膝膝喔，負責發香蕉還有做投影片，有機會的話，你以後吃的都是我發的香蕉。'}
          />
        </div>
      </div>
    );
  }
}


export class Conversation09 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(32)}>
        <div>
          <img src="img/oeo01.png" className="character slideInLeft animated"/>
          <Conversation
            text={'不要這樣，我們是一間那個連網的公司，專注於那個出行，.......'}
          />
        </div>
      </div>
    );
  }
}

export class Conversation10 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(32)}>
        <div>
          <img src="img/oeo01.png" className="character slideInLeft animated"/>
          <Conversation
            text={'很高興認識你，我們是一間那個連網的公司，專注於那個出行，.......(以下省略三千字)'}
          />
        </div>
      </div>
    );
  }
}


export class Conversation11 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(33)}>
        <div>
          <img src="img/oeo01.png" className="character"/>
          <Conversation
            text={'那既然你來應徵前端工作，你對那個有什麼想法嗎?'}
          />
        </div>
      </div>
    );
  }
}

export class Conversation12 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(35)}>
        <div>
          <img src="img/oeo01.png" className="character"/>
          <Conversation
            text={'嗯....我了解了。解咪?'}
          />
        </div>
      </div>
    );
  }
}

export class Conversation13 extends Component {
  componentDidMount(){
    console.log(this.props.gender);
    if (this.props.gender==0) {
      this.props.setScore(+8);
      this.string='女生啊...';
    }else{
      this.props.setScore(-5);
      this.string='男生啊...';
    }
  }
  render() {

    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(36)}>
        <div>
          <img src="img/jammy01.png" className="character slideInLeft animated"/>
          <Conversation
            text={ this.props.gender==0?'我看看你的履歷，女生啊...':'我看看你的履歷，男生啊...' +'，那你知道 劈哩巴拉崩 嗎?'}
          />
        </div>
      </div>
    );
  }
}

export class Conversation14 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(38)}>
        <div>
          <img src="img/jammy02.png" className="character"/>
          <Conversation
            text={'沒事，我覺得你跟他長得很像，打打，你還有問題嗎?'}
          />
        </div>
      </div>
    );
  }
}

export class Conversation15 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(39)}>
        <div>
          <img src="img/cd02.png" className="character slideInLeft animated"/>
          <Conversation
            text={'我看看喔，你的專長是'+this.props.skill_1+'、'+this.props.skill_2+'、'+this.props.skill_3+'?'}
          />
        </div>
      </div>
    );
  }
}

export class Conversation16 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(40)}>
        <div>
          <img src="img/cd02.png" className="character"/>
          <Conversation
            text={'那你對耕田有什麼想法嗎?'}
          />
        </div>
      </div>
    );
  }
}

export class Conversation17 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(42)}>
        <div>
          <img src="img/cd02.png" className="character"/>
          <Conversation
            text={'嗯嗯，很好。'}
          />
        </div>
      </div>
    );
  }
}
export class Conversation18 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(45)}>
        <div>
          <img src="img/oeo01.png" className="character slideInLeft animated"/>
          <Conversation
            text={'今天跟你聊得很愉快，最後你還有什麼問題嗎?'}
          />
        </div>
      </div>
    );
  }
}
export class Conversation19 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(47)}>
        <div>
          <img src="img/jammy01.png" className="character slideInLeft animated"/>
          <Conversation
            text={"It's a Good question. 我們會在會後在寄信給你的。"}
          />
        </div>
      </div>
    );
  }
}

export class Conversation20 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(48)}>
        <div>
          <img src="img/cd01.png" className="character slideInLeft animated"/>
          <Conversation
            text={"對了，你履歷裡提到"+this.props.description+', 這是什麼意思?'}
          />
        </div>
      </div>
    );
  }
}
export class Conversation21 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(50)}>
        <div>
          <img src="img/cd01.png" className="character slideInLeft animated"/>
          <Conversation
            text={'了解，今天真的很謝謝你，'+this.props.name+'。'}
          />
        </div>
      </div>
    );
  }
}
export class Conversation22 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(51)}>
        <div>
          <img src="img/jammy01.png" className="character slideInLeft animated"/>
          <Conversation
            text={'如果沒有意外的話，這兩周內我們會再寄通知信給你。'}
          />
        </div>
      </div>
    );
  }
}
export class Conversation23 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(48)}>
        <div>
          <img src="img/cd01.png" className="character slideInLeft animated"/>
          <Conversation
            text={'了解，今天真的很謝謝你，'+this.props.name+'。'}
          />
        </div>
      </div>
    );
  }
}
export class Conversation24 extends Component {
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-end" onClick={()=>this.props.setStep(48)}>
        <div>
          <img src="img/cd01.png" className="character slideInLeft animated"/>
          <Conversation
            text={'了解，今天真的很謝謝你，'+this.props.name+'。'}
          />
        </div>
      </div>
    );
  }
}