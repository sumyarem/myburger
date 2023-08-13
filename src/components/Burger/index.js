import React, {useContext,useMemo} from "react";
import Burgeringredient from "../Burgeringredient";
import css from "./style.module.css";
import BurgerContext from "../../context/burgercontext";
const Burger = (props) => {


const burgerContext = useContext(BurgerContext);
const items = Object.entries(burgerContext.burger.ingredients);


let content = [];
items.map(el => {
      for (let i = 0; i< el[1]; i++)
      content.push(<Burgeringredient key={`${el[0]}${i +1}`}type={el[0]} />)
});


if(content.length === 0)content = <p> Хачиртай талхныхаа орцыг сонгонуу...</p>;


return useMemo(() =>{
      return (
            <div className={css.Burger}>
            <Burgeringredient type="BraedTop"/>
            {content}
            <Burgeringredient type="BreadBottom" />
            </div>
            );
},[burgerContext.burger.ingredients])

};



export default Burger;