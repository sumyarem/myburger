import React from "react";

import css from "./style.module.css";

export const SearchBox = (props) => (

      <input 
      className={css.searchBox} type="search" placeholder="Хайлт..." onChange={props.onSearch}/>
);