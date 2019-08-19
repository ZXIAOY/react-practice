/** 
 * 机构actions定义
 */

// actionTypes定义
export const JG_CHANGE_VALUE = "JG_CHANGE_VALUE";

// actionCreator
export function changeValue() {
  return {
    type: JG_CHANGE_VALUE,
    // payload: {
    //   value: value
    // }
  }
}