import React, { Component } from 'react';

class Chose08 extends Component {
  handle1=()=>{
    this.props.setScore(+3);
    this.props.setStep(49);
  }
  handle2=()=>{
    this.props.setScore(-5);
    this.props.setStep(49);
  }
  handle3=()=>{
    this.props.setScore(+1);
    this.props.setStep(49);
  }
  handle4=()=>{
    this.props.setScore(+8);
    this.props.setStep(49);
  }
  render() {
    return (
      <div className="bg step11 h-100 d-flex justify-content-center align-items-center">
          <div>
          <h2 className="text-center title">那個...</h2>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle1}>
            <i className="fa fa-envelope-o"/>&nbsp;沒有什麼意思
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle2}>
            <i className="fa fa-map-o"/>&nbsp;字面上的意思
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle3}>
            <i className="fa fa-male"/>&nbsp;你知道的太多了
            </button>
            <button className="mt-4 mx-auto btn btn-danger animated bounceIn d-block w-100" onClick={this.handle4}>
            <i className="fa fa-id-badge"/>&nbsp;就是那個意思
            </button>
          </div>
      </div>
    );
  }
}

export default Chose08;