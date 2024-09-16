
export const SHOW_ALERT = 'SHOW ALERT';

export const showAlert = (payload) => ({type:SHOW_ALERT, payload});

const initState = {
  show:false,
  type:'',  
  message:''
}

export const alertReducer = (state = initState,{type,payload}) => {
  switch(type){
    case SHOW_ALERT:
    console.log(type, payload,'IS AT LINE NUMBER 13');
      return {...state, show: true, type: payload.type, message: payload.message}
    default:
      return state;
  }
}