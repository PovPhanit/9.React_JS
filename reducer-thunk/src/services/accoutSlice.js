import { createStore } from "redux";

const initialState = {
  name: "",
  id: "",
  loanPurpose: "",
  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "loading":
      return { ...state, name:action.name,id:action.id,isLoading:action.status};
    default:
      return state;
  }
}
export function updateName(names){
    return {type:"loading",name:names};
}
// const store = createStore(reducer);
// store.dispatch({type:"loading",name:"Phanit",id:1,status:true});
// console.log(store.getState());
export default reducer;
