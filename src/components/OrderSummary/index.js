import React, {useContext} from "react";
import css from "./style.module.css";
import Button from "../General/Button";
import BurgerContext from "../../context/burgercontext";



const OrderSummary = (props) => {
      
      const ctx = useContext(BurgerContext);

      return(
            <div>
                  <h3>Таны захиалга</h3>
                  <p>Таны сонгосон орцууд:</p>
                  <ul>
                  
                        {Object.keys(ctx.burger.ingredients).map(el=> (
                              <li key={el}>
                              
                              {ctx.burger.ingredientNames[el]}:{ctx.burger.ingredients[el]}</li>))}
                  </ul>
                  <p><strong>Үнийн дүн: {ctx.burger.totalPrice}</strong></p>
                  <Button daragdsan={props.onCancel} btnType="Danger" text="Татгалзах"/>
                  <Button  daragdsan={props.onContinue} btnType="Success" text="Үргэлжлүүлэх"/>
            </div>
            );
};


export default OrderSummary;