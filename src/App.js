import React from 'react';
import { Button } from 'antd-mobile';

// 测试less和css
import './App.less';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { JGActions } from './store/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  addOne = () => {
    this.props.JGAction.changeValue();
  }

  render() {
    console.log('zxy', JGActions);
    return  (
      <div>
        <p>react App homepage <span>{this.props.JGStore.value}</span></p>
        <Button type='primary' onClick={this.addOne}>加1</Button>
      </div>
    );  
  }
}

const mapStateToProps = state => ({
    JGStore: state.JGReducer
});

const mapDispatchToProps = dispatch => ({
  JGAction: bindActionCreators(JGActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);






// // 测试devServer.contentBase
// console.log('zxy1');
// let titleElement = document.createElement('p');
// titleElement.innerText = "js内部代码"
// document.body.appendChild(titleElement);

// // 测试babel/core es6语法解析
// let fn = () => {
//   console.log('何不臧');
// };
// fn();

// // 测试babel-runtime， es6 api解析
// function * gen() {
//   yield 1
// } 
// console.log(gen().next());
