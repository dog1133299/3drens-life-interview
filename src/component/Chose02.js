import React, { Component } from 'react';

class Chose02 extends Component {
  handle1=()=>{
    this.props.setScore(+5);
    this.props.setStep(15);
  }
  handle2=()=>{
    this.props.setScore(+3);
    this.props.setStep(15);
  }
  handle3=()=>{
    this.props.setScore(-5);
    this.props.setStep(15);
  }
  handle4=()=>{
    this.props.setScore(+7);
    this.props.setStep(15);
  }
  render() {
    return (
      <div className="bg step11 h-100 d-flex justify-content-center align-items-center">
          <div>
          <h2 className="text-center title">你決定....</h2>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle1}>
            <i className="fa fa-envelope-o"/>&nbsp;唱一段freestyle
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle2}>
            <i className="fa fa-map-o"/>&nbsp;起來轉圈圈跳個健身操
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle3}>
            <i className="fa fa-male"/>&nbsp;低頭瘋狂滑手機
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle4}>
            <i className="fa fa-id-badge"/>&nbsp;趴在地上做一點瑜珈
            </button>
          </div>
      </div>
    );
  }
}

export default Chose02;