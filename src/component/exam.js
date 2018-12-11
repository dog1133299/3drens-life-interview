import React, { Component } from 'react';

export class Exam1 extends Component {
  handleChange=(e)=>{
    this.props.setAnswer(1,e.target.value);
  }
  render() {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="text-right">
        <div className="text-left bg-white p-2">
          <table className="mx-auto animated zoomIn"  border="1">
            <tbody>
              <tr>
                <th className="text-center"><h2>前端試卷</h2></th>
              </tr>
              <tr>
                <td>
                1) 有一隻熊掉到一個陷阱裡，陷阱深19.617公尺，掉落時間正好2秒，請問熊是什麼顏色的？<br/>
                  &nbsp;&nbsp;<label><input type="radio" name="1"  value={1} onChange={this.handleChange}/> 白色</label><br/>
                  &nbsp;&nbsp;<label><input type="radio" name="1"  value={2} onChange={this.handleChange}/> 棕色</label><br/>
                  &nbsp;&nbsp;<label><input type="radio" name="1"  value={3} onChange={this.handleChange}/> 黑色</label><br/>
                  &nbsp;&nbsp;<label><input type="radio" name="1"  value={4} onChange={this.handleChange}/> 黑棕色</label><br/>
                  &nbsp;&nbsp;<label><input type="radio" name="1"  value={5} onChange={this.handleChange}/> 灰色</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="m-2 btn btn-primary animated pulse infinite ml-auto" onClick={()=>this.props.setStep(18)}>
          <i className="fa fa-envelope-o"/>&nbsp;下一題
        </button>
      </div>
      </div>
    );
  }
}

export class Exam2 extends Component {
  handleChange=(e)=>{
    this.props.setAnswer(2,e.target.value);
  }
  render() {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="text-right">
        <div className="text-left bg-white p-2">
            <table className="mx-auto animated slideInRight"  border="1">
              <tbody>
                <tr>
                  <th className="text-center"><h2>前端試卷</h2></th>
                </tr>
                <tr>
                  <td>
                  2) 我是一個男人，假設你的兒子是我的兒子的爸爸，那麼我是你的誰？​​​​​​<br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={1} onChange={this.handleChange}/> 你的祖父</label><br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={2} onChange={this.handleChange}/> 你的兒子</label><br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={3} onChange={this.handleChange}/> 你的父親</label><br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={4} onChange={this.handleChange}/> 你自己本人</label><br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={5} onChange={this.handleChange}/> 你的孫子</label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="m-2 btn btn-primary animated pulse infinite" onClick={()=>this.props.setStep(19)}>
          <i className="fa fa-envelope-o"/>&nbsp;下一題
          </button>
        </div>
      </div>
    );
  }
}

export class Exam3 extends Component {
  handleChange=(e)=>{
    this.props.setAnswer(3,e.target.value);
  }
  render() {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="text-right">
        <div className="text-left bg-white p-2">
            <table className="mx-auto animated slideInRight"  border="1">
              <tbody>
                <tr>
                  <th className="text-center"><h2>前端試卷</h2></th>
                </tr>
                <tr>
                  <td>
                  3) 你是否不同意今天晚上不應該不吃牛排？<br/>假如你想吃牛排，你應該回答？<br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={1} onChange={this.handleChange}/> 同意</label><br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={2} onChange={this.handleChange}/> 不同意</label><br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={3} onChange={this.handleChange}/> 我不知道</label><br/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="m-2 btn btn-primary animated pulse infinite" onClick={()=>this.props.setStep(20)}>
          <i className="fa fa-envelope-o"/>&nbsp;下一題
          </button>
        </div>
      </div>
    );
  }
}

export class Exam4 extends Component {
  handleChange=(e)=>{
    this.props.setAnswer(4,e.target.value);
  }
  render() {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="text-right">
        <div className="text-left bg-white p-2">
            <table className="mx-auto animated slideInRight"  border="1">
              <tbody>
                <tr>
                  <th className="text-center"><h2>前端試卷</h2></th>
                </tr>
                <tr>
                  <td>
                  4) 有一隻熊掉到一個陷阱裡，陷阱深19.617公尺，掉落時間正好2秒，請問熊是什麼顏色的？<br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={1} onChange={this.handleChange}/> 白色</label><br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={2} onChange={this.handleChange}/> 棕色</label><br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={3} onChange={this.handleChange}/> 黑色</label><br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={4} onChange={this.handleChange}/> 黑棕色</label><br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={5} onChange={this.handleChange}/> 灰色</label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="m-2 btn btn-primary animated pulse infinite" onClick={()=>this.props.setStep(21)}>
          <i className="fa fa-envelope-o"/>&nbsp;下一題
          </button>
        </div>
      </div>
    );
  }
}

export class Exam5 extends Component {
  handleChange=(e)=>{
    this.props.setAnswer(5,e.target.value);
  }
  render() {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="text-right">
        <div className="text-left bg-white p-2">
            <table className="mx-auto animated slideInRight"  border="1">
              <tbody>
                <tr>
                  <th className="text-center"><h2>前端試卷</h2></th>
                </tr>
                <tr>
                  <td>
                  5) 有一隻熊掉到一個陷阱裡，陷阱深19.617公尺，掉落時間正好2秒，請問熊是什麼顏色的？<br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={1} onChange={this.handleChange}/> 白色</label><br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={2} onChange={this.handleChange}/> 棕色</label><br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={3} onChange={this.handleChange}/> 黑色</label><br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={4} onChange={this.handleChange}/> 黑棕色</label><br/>
                    &nbsp;&nbsp;<label><input type="radio" name="1" value={5} onChange={this.handleChange}/> 灰色</label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="m-2 btn btn-primary animated pulse infinite" onClick={()=>this.props.setStep(22)}>
          <i className="fa fa-envelope-o"/>&nbsp;下一題
          </button>
        </div>
      </div>
    );
  }
}