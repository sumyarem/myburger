import React,{useEffect, useContext} from "react";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import { SearchBox } from "../../components/searchBox";
import OrderContext from "../../context/OrdersContext";
import UserContext from "../../context/UserContext";


const OrderPage = (props) => {

  useEffect(() => {
    ctx.loadOrders(Uctx.state.userId,Uctx.state.token);
  }, []);
  

  const ctx = useContext(OrderContext);
  const Uctx = useContext(UserContext);
  // const onSearchChanged = (event) => {
  //   console.log ( {searchField: event.target.value });
  // };


  
    // const { orders, searchField } = state;

    // const filteredOrders = orders.filter((el) =>
    //   el.name?.toLowerCase().includes(searchField.toLowerCase())
    // );

    return (
      <div>
        <h1>Хайлт</h1>
        
        {/* <SearchBox onSearch={onSearchChanged} /> */}
        
                  {ctx.state.loading ? ( 
                  <Spinner /> 
                  ):(
                        ctx.state.orders.map(el => <Order key={el[0]} order={el[1]}/>)
                        )}
            </div>
    );
  }



export default OrderPage;
