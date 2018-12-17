import React, { Component } from 'react';

class Chose05 extends Component {
  handle1=()=>{
    this.props.setScore(-3);
    this.props.setStep(37);
  }
  handle2=()=>{
    this.props.setScore(+3);
    this.props.setStep(37);
  }
  handle3=()=>{
    this.props.setScore(+5);
    this.props.setStep(37);
  }
  handle4=()=>{
    this.props.setScore(+10);
    this.props.setStep(37);
  }
  render() {
    return (
      <div className="bg step11 h-100 d-flex justify-content-center align-items-center">
          <div>
          <h2 className="text-center title">劈哩巴拉崩</h2>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle1}>
            <i className="fa fa-envelope-o"/>&nbsp;是誰?
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle2}>
            <i className="fa fa-map-o"/>&nbsp;是一個藝人?
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle3}>
            <i className="fa fa-male"/>&nbsp;是一個小模?
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle4}>
            <i className="fa fa-id-badge"/>&nbsp;是一個youtuber?
            </button>
          </div>
      </div>
    );
  }
}

export default Chose05;