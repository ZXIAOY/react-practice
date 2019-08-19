/** 
 * 渠道App相关reducer
 * 复制jg的
 */
// 初始状态
const initialState = {
  value: 10
};

export default function QDReducer(state = initialState, action) {
  switch(action.type) {
    case 'QD_CHANGE_VALUE':
      return Object.assign({}, state, {
        value: action.payload.value
      });
    default:
      return state;
  }
}
