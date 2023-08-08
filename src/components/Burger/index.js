import React from "react";
import { connect } from "react-redux";
import Burgeringredient from "../Burgeringredient";
import css from "./style.module.css";
import { useNavigate } from "react-router-dom";
const Burger = (props) => {




const items= Object.entries(props.orts);


let content = [];
items.map(el => {
      for (let i = 0; i< el[1]; i++)
      content.push(<Burgeringredient key={`${el[0]}${i +1}`}type={el[0]} />)
});


if(content.length === 0)content = <p> Хачиртай талхныхаа орцыг сонгонуу...</p>;

return (
<div className={css.Burger}>
<Burgeringredient type="BraedTop"/>
{content}
<Burgeringredient type="BreadBottom" />
</div>
);
};


const mapStateTopProps = state =>{
      return{
            orts: state.burgerReducer.ingredients
      };
}
export default connect(mapStateTopProps) (Burger);