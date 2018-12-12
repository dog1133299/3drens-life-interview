import React, { Component } from 'react';

class Start extends Component {
  render() {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
	      <div className="text-center">
	        <img src="img/main.png" className="img-fluid animated bounceInDown"/>
	      <div className="animated bounceInUp delay-1s">
         <i onClick={()=>this.props.setStep(1)} className="fa fa-paw fa-4x text-ignite-3 animated pulse infinite paw-shadow"></i>
      	</div>
      	</div>
      </div>
    );
  }
}

export default Start;