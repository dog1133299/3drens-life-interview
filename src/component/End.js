import React, { Component } from 'react';

export class GoodEnd extends Component {
  render() {
    return (
      <div className="h-100 text-center">
	      <div className="d-flex justify-content-center h-50">
	        <img src="img/main.png" className="img-fluid align-self-end animated bounceInDown"/>
	      </div>
	        <img src="img/end2.png" onClick={()=>this.props.setStep(0)} className="img-fluid align-self-end animated pulse infinite"/>
      </div>
    );
  }
}


export class BadEnd extends Component {
  render() {
    return (
      <div className="h-100 text-center">
	      <div className="d-flex justify-content-center h-50">
	        <img src="img/main.png" className="img-fluid align-self-end animated bounceInDown"/>
	      </div>
	      <img src="img/end1.png" onClick={()=>this.props.setStep(0)} className="img-fluid align-self-end animated pulse infinite"/>
      </div>
    );
  }
}