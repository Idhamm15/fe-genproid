const initializeApp={
  product:[]
}

const reducer = (state=  initializeApp, action)=>{
    try{
   
    if (action.type === 'DATA_PRODUCT') {
      return{
        ...state,
        product:action.value
      }
    }
    return state;
  }catch(error){
    console.log(error);
  }
}
  export default reducer;