import React, { Component } from 'react';

class Chose02 extends Component {
  handle1=()=>{
    this.props.setScore(-5);
    this.props.setStep(15);
  }
  render() {
    return (
      <div className="bg step1 h-100 d-flex justify-content-center align-items-center">
          <div>
          <h2 className="text-center title">你決定....</h2>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle1}>
            <i className="fa fa-envelope-o"/>&nbsp;自唱freestyle
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={()=>this.props.setStep(11)}>
            <i className="fa fa-map-o"/>&nbsp;轉圈圈
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={()=>this.props.setStep(9)}>
            <i className="fa fa-male"/>&nbsp;低頭猛滑手機
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={()=>this.props.setStep(11)}>
            <i className="fa fa-id-badge"/>&nbsp;左顧右盼
            </button>
          </div>
      </div>
    );
  }
}

export default Chose02;