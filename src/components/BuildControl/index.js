import React, { useContext } from "react";
import css from "./style.module.css";
import BurgerContext from "../../context/burgercontext";
const BuildControl = (props) => {
      
const burgerContext = useContext( BurgerContext );
return(
<div className={css.BuildControl}> 
<div className={css.Label}>{props.orts} </div>

<button
disabled={props.disabled[props.type]} 
onClick={() => burgerContext.removeingredient(props.type)} className={css.Less}>хасах</button> 

<button onClick={() => burgerContext.addingredient(props.type)} className={css.More}>Нэмэх</button>
</div>
);
};
 




export default BuildControl;