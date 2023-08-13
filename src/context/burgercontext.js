import React, { useState } from "react";
import axios from "../axios-orders";
const INGREDIENT_PRICE = {Salad:150, Cheese:250, Bacon: 800, Meat: 1500};
const BurgerContext = React.createContext({});

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
      
      },
      saving: false,
      finished: false,
      error: null
};




export const BurgerStore = (props) =>{
      
      const [burger, setBurger] = useState(initialState);



      const saveBurger = (newOrder, token) => {

            setBurger({...burger, saving: true});

            // const token = getState().signuploginReducer.token;

      axios
      .post(`orders.json?auth=${token}`,newOrder)
      .then(response => {
            
            setBurger({...burger, saving:false, finished: true, error: null});
      
})
.catch(error => {
      setBurger({...burger, saving:false, finished: true, error});
      
      });
      }


      const clearBurger = () => {
            setBurger(initialState);
      };


      const addingredient = (orts) => {
            setBurger({
                  ...burger, 
                  ingredients:{
                        ...burger.ingredients,
                        [orts]: burger.ingredients[orts] +1,
                  },
                  totalPrice: burger.totalPrice + INGREDIENT_PRICE[orts],
                  purchasing:true,
            });
      };

      const removeingredient = (orts) => {
            const newPrice =  burger.totalPrice - INGREDIENT_PRICE[orts];
            setBurger({
                  ...burger, 
                  ingredients:{
                        ...burger.ingredients,
                        [orts]: burger.ingredients[orts] -1,
                  },
                  totalPrice: newPrice,
                  purchasing: newPrice > 1000
            });
      };

      return (
            <BurgerContext.Provider
            
            value={{burger, addingredient,removeingredient, saveBurger,clearBurger}}>
                  {props.children}
            </BurgerContext.Provider>
      );
};


export default BurgerContext;