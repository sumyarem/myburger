import React from "react";
import Spinner from "../../components/General/Spinner";

import Order from "../../components/Order";
import { connect } from "react-redux";
import { SearchBox } from "../../components/searchBox"; // Make sure to import the correct component name
import * as actions from "../../redux/actions/orderAction";
class OrderPage extends React.Component {
  

  onSearchChanged = (event) => {
    console.log ( {searchField: event.target.value });
  };

  componentDidMount(){
    this.props.loadOrders(this.props.userId);
    // this.setState({ loading:true });

    
}

  render() {
  
    const { orders, searchField } = this.state;

    const filteredOrders = orders.filter((el) =>
      el.name?.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <h1>Хайлт</h1>
        <SearchBox onSearch={this.onSearchChanged} />
        
                  {this.props.loading ? ( 
                  <Spinner /> 
                  ):(
                        this.props.orders.map(el => <Order key={el[0]} order={el[1]}/>)
                        )}
            </div>
    );
  }
}


const mapStateTopProps = state => {
  return{
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    userId: state.signuploginReducer.userId,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadOrders: (userId) => dispatch(actions.loadOrders(userId))
  };
};
export default connect(mapStateTopProps,mapDispatchToProps) (OrderPage);
