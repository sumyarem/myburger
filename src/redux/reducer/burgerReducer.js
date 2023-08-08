
const initialState = {
      ingredients:{
            Salad: 0,
            Cheese: 0,
            Bacon: 0,
            Meat: 0
      },
      totalPrice: 1000,
      purchasing:false,
      ingredientNames: {
            Bacon: "Гахайн мах",
            Cheese: "Бяслаг",
            Meat: " Үхрийн мах",
            Salad: "Салад"
      
      }
};
const INGREDIENT_PRICE = {Salad:150, Cheese:250, Bacon: 800, Meat: 1500};

const reducer = ( state = initialState, action) => {
      
      if(action.type === "ADD_INGREDIENT"){
            
            return{
                  ...state,
                  ingredients: {
                        ...state.ingredients,
                        [action.ortsNer]: state.ingredients[action.ortsNer] + 1
                  },
                  totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ortsNer],
                  purchasing:true,
            };
      }else if (action.type === "REMOVE_INGREDIENT"){
            const newPrice =  state.totalPrice - INGREDIENT_PRICE[action.ortsNer];
            return{
                  ...state,
                  ingredients: {
                        ...state.ingredients,
                        [action.ortsNer]: state.ingredients[action.ortsNer] - 1
                  },
                  totalPrice: newPrice,
                  purchasing: newPrice > 1000
            };
      }
      return state;
};


export default reducer;