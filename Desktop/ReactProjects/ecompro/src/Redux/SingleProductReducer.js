const intialstate = {
    productdetail: []
}

const SingleProductReducer=( state = intialstate , action)=>{
   switch(action.type){
       case 'PRODUCT_DETAIL' : {
           return{
            productdetail : [ action.payload ]
       }

       }
       default: return state;
    }
      
}
export default SingleProductReducer