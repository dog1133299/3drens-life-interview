import React, {Component} from 'react';
import Typing from 'react-typing-animation';

export class BubbleText extends Component {
  render() {
    return (
      <div className="align-self-end w-100 animated slideInUp faster bubble" >
         <Typing><span>{this.props.text}</span></Typing>
         <i className="fa fa-paw fa-2x ruby-text-red-2 animated pulse infinite paw"></i>
      </div>
    );
  }
}
export class Conversation extends Component {
  render() {
    return (
      <div className="animated flipInY bubble2" >
         <Typing><span>{this.props.text}</span></Typing>
         <i className="fa fa-paw fa-2x text-warning animated pulse infinite paw"></i>
      </div>
    );
  }
}
