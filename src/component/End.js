import React, { Component } from 'react';

export class GoodEnd extends Component {
  render() {
    return (
      <div className="h-100 text-center">
	      <div className="d-flex justify-content-center h-50">
	        <img src="img/main.png" className="img-fluid align-self-end animated bounceInDown"/>
	      </div>
	        <div>
	        <button onClick={()=>this.props.setStep(0)} className="w-75 btn btn-danger animated pulse infinite slow">
	        成功通關!!
	        </button>
      	</div>
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
	        <div>
	        <button onClick={()=>this.props.setStep(0)} className="w-75 btn btn-danger animated pulse infinite slow">
	        很遺憾
	        </button>
      	</div>
      </div>
    );
  }
}

