import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// 创建通过middleware增强后的store实例
let store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;