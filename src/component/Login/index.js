// 登录页组件
import React, {Component} from 'react';
import {render} from 'react-dom';

class Login extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log('aaa'); 
    return (
      <div>
        <p>登录</p>
        <p>注册</p>
      </div>
    );
  }
}

export default Login;