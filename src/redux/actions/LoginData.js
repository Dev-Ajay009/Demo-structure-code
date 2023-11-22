import store from "../store";
import types from "../types";



const {dispatch} = store;
export const get_data = data => {
  dispatch({
    type: types.GetData,
    payload: data,
  });
};
