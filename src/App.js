import React from 'react';
import { Button } from 'antd-mobile';

// 测试less和css
import './App.less';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { JGActions } from './store/actions';

import Login from './component/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return  (
      <div>
        <p>react App 主页</p>
        <Login></Login>
      </div>
    );  
  }
}

// const mapStateToProps = state => ({
//     JGStore: state.JGReducer
// });

// const mapDispatchToProps = dispatch => ({
//   JGAction: bindActionCreators(JGActions, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
