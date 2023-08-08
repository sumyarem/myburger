import React , {Fragment} from "react";
import css from "./style.module.css";
import Menuitem from "../Menuitem";
import { connect } from "react-redux";

 const Menu = (props) => (
 <div>
 <ul className={css.Menu}>

 {props.userId ? (
<Fragment>

    
    <Menuitem   link ="/orders">ЗАХИАЛАГАНУУД </Menuitem>
    
        <Menuitem link ="/logout"> Гарах </Menuitem> </Fragment>
        ) :(
            <Fragment>
            <Menuitem exact link ="/">Шинэ захиалга</Menuitem>
    <Menuitem   link ="/login">НЭВТРЭХ</Menuitem>
    <Menuitem   link ="/signup">БҮРГҮҮЛЭХ</Menuitem>
    
    </Fragment>
        )}
    
    

</ul>

</div>
);


const mapStateToProps = state => {
    return{
        userId: state.signuploginReducer.userId
    }
}
export default connect() (Menu);