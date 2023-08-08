import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/burgerActions";
const BuildControls = props => {
      const disabledIngrediendts = {...props.burgeriinOrts};

            for (let key in disabledIngrediendts) {
                  disabledIngrediendts[key] = disabledIngrediendts[key] <= 0;
            
            }
      
      return (
      <div className={css.BuildControls}>
      <p> Бургерийн үнэ:<strong> {props.price}</strong></p>

      
            {Object.keys(props.ingredientNames).map(el =>( 

                  <BuildControl
                  key={[el]}
      ortsNemeh={props.ortsNemeh} 
      ortsHasah={props.ortsHasah} 
      disabled={disabledIngrediendts}
      type={el} 
      orts={props.ingredientNames[el]}
      />

            ))}
      

      <button 
      onClick={props.showConfitmModal}
      disabled={!props.purchasing}
      className={css.OrderButton}>Захиалах</button>
      
      
      
      </div>
      )
}
const mapStateToProps = state => {
      return{
            burgeriinOrts: state.burgerReducer.ingredients,
            price: state.burgerReducer.totalPrice,
            purchasing: state.burgerReducer.purchasing,
            ingredientNames: state.burgerReducer.ingredientNames
      };
};


const mapDispatchToProps = dispatch =>{
      return{
            ortsNemeh: ortsNer => dispatch(actions.addingredient(ortsNer)),
            ortsHasah: ortsNer => dispatch(actions.removeingredient(ortsNer)),
      };
};
export default connect(mapStateToProps,mapDispatchToProps)(BuildControls);
