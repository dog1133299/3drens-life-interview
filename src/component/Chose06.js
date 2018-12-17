import React, { Component } from 'react';

class Chose06 extends Component {
  handle1=()=>{
    this.props.setScore(+3);
    this.props.setStep(41);
  }
  handle2=()=>{
    this.props.setScore(+5);
    this.props.setStep(41);
  }
  handle3=()=>{
    this.props.setScore(-3);
    this.props.setStep(41);
  }
  handle4=()=>{
    this.props.setScore(+8);
    this.props.setStep(41);
  }
  render() {
    return (
      <div className="bg step11 h-100 d-flex justify-content-center align-items-center">
          <div>
          <h2 className="text-center title">我覺得耕田</h2>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle1}>
            <i className="fa fa-envelope-o"/>&nbsp;要回歸原始的方式
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle2}>
            <i className="fa fa-map-o"/>&nbsp;要實施自動化
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle3}>
            <i className="fa fa-male"/>&nbsp;愛怎麼耕就怎麼耕
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle4}>
            <i className="fa fa-id-badge"/>&nbsp;最重要是播種
            </button>
          </div>
      </div>
    );
  }
}

export default Chose06;