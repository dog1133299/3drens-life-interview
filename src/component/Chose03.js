import React, { Component } from 'react';

class Chose03 extends Component {
  handle1=()=>{
    this.props.setScore(-10);
    this.props.setStep(29);
  }
  handle2=()=>{
    this.props.setScore(+5);
    this.props.setStep(30);
  }
  handle3=()=>{
    this.props.setScore(+10);
    this.props.setStep(29);
  }
  handle4=()=>{
    this.props.setStep(31);
  }
  render() {
    return (
      <div className="bg step11 h-100 d-flex justify-content-center align-items-center">
          <div>
          <h2 className="text-center title">哈囉，</h2>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle1}>
            <i className="fa fa-envelope-o"/>&nbsp;我是{this.props.name}，你們是變態嗎
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle2}>
            <i className="fa fa-map-o"/>&nbsp;我是{this.props.name}，很高興認識你們
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle3}>
            <i className="fa fa-male"/>&nbsp;我是{this.props.name}，我不喜歡香蕉
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle4}>
            <i className="fa fa-id-badge"/>&nbsp;我是{this.props.name}，我突然有點急事
            </button>
          </div>
      </div>
    );
  }
}

export default Chose03;