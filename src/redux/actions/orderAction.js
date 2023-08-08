import axios from "../../axios-orders";

export const loadOrders = userId => {
      
      return function(dispatch, getState){
      
      dispatch(loadOrders());
const token = getState().signuploginReducer.token;
      axios
      
      .get(`orders.json?auth=${token}&orderBy="userid/"&equalTo="${userId}`)    
      .then(response => {
            const loadedOrders = Object.entries(response.data).reverse();
            dispatch(loadOrdersSuccess(loadedOrders ));
      
})
.catch(err => dispatch(loadOrdersError)(err));
      };
};

export  const  loadOrdersStart = () =>{
      return{
            type: "LOAD_ORDERS_START"
      };
};
      

export const loadOrdersSuccess = loadedOrders => {
      return{
            type: "LOAD_ORDERS_SUCCESS",
            orders: loadedOrders
      };
};

export const loadOrdersError = error => {
      return{
            type: "LOAD_ORDERS_ERROR",
            error
      };
};
// zahialaga hadgalah
export const saveOrder = newOrder => {
      
      return function(dispatch,getState){

            const token = getState().signuploginReducer.token;

      dispatch(saveOrderStart());

      axios
      
      .get(`/orders.json?auth=${token}`,newOrder)
      .then(response => {
            
            dispatch(saveOrderSuccess());
      
})
.catch(error => dispatch(saveOrderError)(error));
      };
};


/// zahialaga hadgalah



export const saveOrderStart = () =>{
      return{
            type: "SAVE_ORDER_START"
      };

};

export const saveOrderSuccess = () =>{
      return{
            type: "SAVE_ORDER_SUCCESS"
      };
};

export const saveOrderError = error =>{
      return{
            type: "SAVE_ORDER_ERROR",
            errorMess: error
      };
};
