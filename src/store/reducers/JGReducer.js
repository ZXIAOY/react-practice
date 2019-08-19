/** 
 * 机构App相关reducer(测试暂定)
 */

// 初始状态
const initialState = {
  value: 10
};

// JGReducer接收所有jg相关的action，并处理state
export default function JGReducer(state = initialState, action) {
  switch(action.type) {
    case 'JG_CHANGE_VALUE':
      return Object.assign({}, state, {
        value: state.value + 1
      });
    default:
      return state;
  }
}



