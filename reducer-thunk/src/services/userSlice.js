import { createStore } from "redux";

const initialState = {
  id:'',
  address:'',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "loading":
      return { ...state,};
    default:
      return state;
  }
}

// const store = createStore(reducer);
// store.dispatch({type:"loading",name:"Phanit",id:1,status:true});
// console.log(store.getState());
export default reducer;