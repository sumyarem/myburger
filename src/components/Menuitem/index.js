import React from "react";
import css from "./style.module.css";
import { NavLink } from "react-router-dom";

const Menuitem = (props) => (
      <li className={css.Menuitem}>
      <NavLink exact={props.exact} activeClassName={css.active} to={props.link}>{props.children}</NavLink>

      
      </li>
);


export default Menuitem;