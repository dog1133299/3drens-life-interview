import React, { Component } from 'react';

class Chose04 extends Component {
  handle1=()=>{
    this.props.setScore(+5);
    this.props.setStep(34);
  }
  handle2=()=>{
    this.props.setScore(+10);
    this.props.setStep(34);
  }
  handle3=()=>{
    this.props.setScore(+3);
    this.props.setStep(34);
  }
  handle4=()=>{
    this.props.setScore(-5);
    this.props.setStep(34);
  }
  render() {
    return (
      <div className="bg step11 h-100 d-flex justify-content-center align-items-center">
          <div>
          <h2 className="text-center title">我覺得</h2>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle1}>
            <i className="fa fa-envelope-o"/>&nbsp;那個聯網很不錯，有錢途
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle2}>
            <i className="fa fa-map-o"/>&nbsp;那個聯網很常見，你們要不要考慮聯這個
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle3}>
            <i className="fa fa-male"/>&nbsp;不好意思，我沒聽懂
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle4}>
            <i className="fa fa-id-badge"/>&nbsp;好的好得好的我明白
            </button>
          </div>
      </div>
    );
  }
}

export default Chose04;