import React, { Component } from 'react';

class Chose01 extends Component {
  render() {
    return (
      <div className="h-100 bg step5 d-flex justify-content-center align-items-center">
          <div>
          <h2 className="text-center paw-shadow"><b>如何找到思源樓?</b></h2>
            <button className="mt-4 mx-auto btn btn-primary animated bounceIn d-block w-100" onClick={()=>this.props.setStep(10)}>
            <i className="fa fa-envelope-o"/>&nbsp;自己照著面試通知郵件提示走
            </button>
            <button className="mt-4 mx-auto btn btn-primary animated bounceIn d-block w-100" onClick={()=>this.props.setStep(11)}>
            <i className="fa fa-map-o"/>&nbsp;看手機，跟著孤狗走
            </button>
            <button className="mt-4 mx-auto btn btn-primary animated bounceIn d-block w-100" onClick={()=>this.props.setStep(9)}>
            <i className="fa fa-male"/>&nbsp;發現旁邊有個路人，問他怎麼走
            </button>
            <button className="mt-4 mx-auto btn btn-primary animated bounceIn d-block w-100" onClick={()=>this.props.setStep(11)}>
            <i className="fa fa-id-badge"/>&nbsp;路口有警衛室，問問警衛
            </button>
          </div>
      </div>
    );
  }
}

export default Chose01;