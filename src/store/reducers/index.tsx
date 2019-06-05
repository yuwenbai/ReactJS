import { combineReducers } from 'redux'

import { ModifyAction } from '../actions';
import { DECREMENT, INCREMENT } from '../const';


// // 处理并返回 state 
// function count (state1 :number, action: ModifyAction): number {
//     switch (action.type) {
//       case INCREMENT:
//         return state1 + 1
//       case DECREMENT:
//         return state1 - 1
//       default:
//         return state1
//     }
// }
// function test (state :number, action: ModifyAction): number {
//   switch (action.type) {
//     default:
//       return state
//   }
// }
  
// //这样可以吧store变成一个对象来组合reducer = state
// const rootReducer = combineReducers({
//  count,
//  test
// })
// 处理并返回 state 
export default (state = 0, action: ModifyAction): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}