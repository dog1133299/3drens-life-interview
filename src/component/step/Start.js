import React, { Component } from 'react';

class Start extends Component {
  render() {
    return (
      <div className="h-100 text-center">
	      <div className="d-flex justify-content-center h-50">
	        <img src="img/main.png" className="img-fluid align-self-end animated bounceInDown"/>
	      </div>
	        <div>
	        <button onClick={()=>this.props.setStep(1)} className="w-75 btn btn-danger animated pulse infinite slow">
	        開始
	        </button>
      	</div>
      </div>
    );
  }
}

export default Start;