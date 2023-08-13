import React, {useContext} from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
import BurgerContext from "../../context/burgercontext";

const BuildControls = props => {

      const ctx = useContext(BurgerContext);

      const disabledIngrediendts = {...ctx.burger.ingredients};

            for (let key in disabledIngrediendts) {
                  disabledIngrediendts[key] = disabledIngrediendts[key] <= 0;
            
            }
      
      return (
      <div className={css.BuildControls}>
      <p> Бургерийн үнэ:<strong> {ctx.burger.totalPrice}</strong></p>

      
            {Object.keys(ctx.burger.ingredientNames).map(el =>( 

                  <BuildControl
                  key={[el]} 
      disabled={disabledIngrediendts}
      type={el} 
      orts={ctx.burger.ingredientNames[el]}
      />

            ))}
      

      <button 
      onClick={props.showConfitmModal}
      disabled={!ctx.burger.purchasing}
      className={css.OrderButton}>Захиалах</button>
      
      
      
      </div>
      )
}



export default BuildControls;
