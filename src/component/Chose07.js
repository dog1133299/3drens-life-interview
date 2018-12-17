import React, { Component } from 'react';

class Chose07 extends Component {
  handle1=()=>{
    this.props.setScore(+5);
    this.props.setStep(46);
  }
  handle2=()=>{
    this.props.setScore(-3);
    this.props.setStep(46);
  }
  handle3=()=>{
    this.props.setScore(-5);
    this.props.setStep(46);
  }
  handle4=()=>{
    this.props.setScore(+3);
    this.props.setStep(46);
  }
  handle5=()=>{
    this.props.setScore(+8);
    this.props.setStep(46);
  }
  render() {
    return (
      <div className="bg step11 h-100 d-flex justify-content-center align-items-center">
          <div>
          <h2 className="text-center title">我想問...</h2>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle1}>
            <i className="fa fa-envelope-o"/>&nbsp;你們開始收成了嗎?
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle2}>
            <i className="fa fa-map-o"/>&nbsp;一加一為什麼不等於二?
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle3}>
            <i className="fa fa-map-o"/>&nbsp;為什麼我叫{this.props.name}?
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle4}>
            <i className="fa fa-male"/>&nbsp;為什麼地球是圓的?
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle5}>
            <i className="fa fa-id-badge"/>&nbsp;你會FreeStyle嗎
            </button>
          </div>
      </div>
    );
  }
}

export default Chose07;