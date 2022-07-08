const intialstate = {
  cartItems: [],
};

const CartReducer = (state = intialstate, action) => {
  // console.log(action.payload, 'reducer')
  switch (action.type) {
    case "ADD_TO_CART": {
      action.payload.count = 1;
      const productId = action.payload.id;
      let currentProductExistID = null;
      for (let i = 0; i < state.cartItems.length; i++) {
        const O = state.cartItems[i];
        if (O.id == productId) {
          currentProductExistID = i;
          break;
        }
      }
      if (currentProductExistID!=null) {
        state.cartItems[currentProductExistID].count +=1
        return {
            ...state,
            cartItems: [...state.cartItems],
          };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cartItems: state.cartItems.filter((data) => {
          return data.id !== action.payload;
        }),
      };
    }
    case "INCREMENT": {
      let UpdatedateCart = state.cartItems.map((curdata) => {
        if (curdata._id === action.payload) {
          return { ...curdata, count : curdata.count +1 };
        }
        if(curdata.count >15){
          return { ...curdata, count : curdata.count};
        }
        })
      return {...state.cartItems , cartItems : UpdatedateCart};
    }
    case 'DECREMENT':{
     let updateCart = state.cartItems.map((data)=>{
      if(data._id === action.payload){
        return{ ...data, count : data.count -1};
      }
      return data;
     }).filter((curdata)=>{
      return curdata.count !== 0;
         })

     return{...state.cartItems, cartItems: updateCart}
    } 
    default:
      return state;
  }
  
};

export default CartReducer;
