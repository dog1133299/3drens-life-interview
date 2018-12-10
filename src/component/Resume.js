import React, { Component } from 'react';

class Resume extends Component {
  constructor(){
    super();
    this.table={
      name: '',
      sex: 1,
      skill_1: '',
      skill_2: '',
      skill_3: '',
      description: '',
    }
  }
  handleChange=(e)=>{
    console.log(e.target.value);
    this.table[e.target.name]=e.target.value;
  }
  render() {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div  className="text-right">
          <div className="text-left bg-white p-2">
            <table className="mx-auto animated zoomIn"  border="1">
              <tbody>
                 <tr>
                  <th colSpan="5" className="text-center"><h2>履歷</h2></th>
                </tr>
                <tr>
                  <td rowSpan="2">姓名:</td>
                  <td colSpan="2" rowSpan="2">
                  <input placeholder='大便' name="name" className="p-1 m-1" onChange={this.handleChange}/>
                  </td>
                  <td colSpan="2">性別</td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="radio" name="gender" value={1} onChange={this.handleChange}/> 男
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="radio" name="gender" value={0} onChange={this.handleChange}/> 女
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>住址</td>
                  <td colSpan="4">中整區四元街四元街四元街</td>
                </tr>
                <tr>
                  <td>學歷</td>
                  <td colSpan="2">科技大學</td>
                  <td colSpan="3">資訊工程學系</td>
                </tr>
                <tr>
                  <td>技能專長</td>
                  <td colSpan="4">
                  &nbsp;1) <input placeholder='大便' name="skill_1" className="m-1 p-1" onChange={this.handleChange}/><br/>
                  &nbsp;2) <input placeholder='大便' name="skill_2" className="m-1 p-1" onChange={this.handleChange}/><br/>
                  &nbsp;3) <input placeholder='大便' name="skill_3" className="m-1 p-1" onChange={this.handleChange}/><br/>
                  </td>
                </tr>
                <tr>
                  <td>備註</td>
                  <td colSpan="4">
                    <input placeholder='你好嗎' name="description" className="w-75 m-1 p-1" onChange={this.handleChange}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="m-2 btn btn-primary animated pulse infinite" onClick={()=>this.props.submit(this.table)}>
          <i className="fa fa-envelope-o"/>&nbsp;確認寄出
          </button>
        </div>
      </div>
    );
  }
}

export default Resume;