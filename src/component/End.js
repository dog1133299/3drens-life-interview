import React, { Component } from 'react';

export class GoodEnd extends Component {
  render() {
    return (
      <div className="h-100 text-center">
	      <div className="d-flex justify-content-center h-50">
	        <img src="img/main.webp" className="img-fluid align-self-end animated bounceInDown" alt="img"/>
	      </div>
	        <img src="img/end2.webp" onClick={()=>this.props.setStep(0)} className="img-fluid align-self-end animated pulse infinite" alt="img"/>
      </div>
    );
  }
}


export class BadEnd extends Component {
  render() {
    return (
      <div className="h-100 text-center">
	      <div className="d-flex justify-content-center h-50">
	        <img src="img/main.webp" className="img-fluid align-self-end animated bounceInDown" alt="img"/>
	      </div>
	      <img src="img/end1.webp" onClick={()=>this.props.setStep(0)} className="img-fluid align-self-end animated pulse infinite" alt="img"/>
      </div>
    );
  }
}