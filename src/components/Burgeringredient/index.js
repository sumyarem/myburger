import React from "react";
import css from "./style.module.css";

const Burgeringredient = (props) => {
      if (props.type == "BraedTop") return (
      <div className={css.BreadTop}>
            <div className={css.Seed}></div>
            <div className={`${css.Seed} ${css.Second}`}></div>
            <div className={`${css.Seed} ${css.Third}`}></div>
            <div className={`${css.Seed} ${css.Fourth}`}></div>
            
      </div>)
      if (props.type == "Salad")return <div className={css.Salad}></div>;
      if (props.type == "Bacon")return <div className={css.Bacon}></div>;
      if (props.type == "Meat")return <div className={css.Meat}></div>;
      if (props.type == "Cheese")return <div className={css.Cheese}></div>;
      if (props.type == "BreadBottom")return <div className={css.BreadBottom}></div>;
      
      return <div>utga onoo</div>
      

};

export default Burgeringredient;