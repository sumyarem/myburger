import React , {useContext} from "react";
import css from "./style.module.css";
import Menuitem from "../Menuitem";
import UserContext from "../../context/UserContext";

 const Menu = (props) => {

    const ctx = useContext(UserContext);

    return(

    
 <div>
 <ul className={css.Menu}>

 {ctx.state.userId ? (
<>

<Menuitem exact link ="/">Шинэ захиалга</Menuitem>
    <Menuitem   link ="/orders">ЗАХИАЛАГАНУУД </Menuitem>
    
        <Menuitem link ="/logout"> Гарах </Menuitem> </>
        ) :(
            <>
            
    <Menuitem   link ="/login">НЭВТРЭХ</Menuitem>
    <Menuitem   link ="/signup">БҮРГҮҮЛЭХ</Menuitem>
    
    </>
        )}
    
    

</ul>

</div>
    );
};



export default Menu;