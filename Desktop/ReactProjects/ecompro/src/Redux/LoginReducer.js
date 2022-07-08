const intialstate ={
    loginData : [],
}

const LoginReducer = ( state = intialstate, action)=>{

    // console.log(state.loginData.length ,'reducer')
    switch(action.type){
        case 'GET_USER_DATA' : {
          return{
              loginData : [  action.payload]
          }
          
        }
        case 'LOGOUT_PROFILE':{
            return{
                loginData : [action.payload]
            }
        }
        default : return state;
    }
    
}
 
export default LoginReducer;

