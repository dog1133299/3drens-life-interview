import React, { Component } from 'react';

class Start extends Component {
  componentDidMount(){
    this.props.init();
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
	      <div className="text-center">
	        <img src="img/main.webp" className="img-fluid animated bounceInDown" alt="img"/>
	      <div className="animated bounceInUp delay-1s">
         <i onClick={()=>this.props.setStep(1)} className="fa fa-paw fa-4x text-ignite-3 animated pulse infinite paw-shadow"></i>
      	</div>
      	</div>
      </div>
    );
  }
}

export default Start;