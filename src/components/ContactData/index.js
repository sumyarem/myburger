import React from "react";
import css from "./style.module.css";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import axios from "../../axios-orders";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/orderAction";
import { withRouter } from "react-router-dom"; 

class ContactData extends React.Component{

      state = {
            hayag: {
                  name: null,
                  city: null,
                  street: null,
                  
            }
      };

      changeName = e => {
            this.setState({ name: e.target.value});
      };

      changeStreet = e => {
            this.setState({ street: e.target.value});
      };

      changeCity = e => {
            this.setState({ city: e.target.value});
      };


      componentDidUpdate(){
            if(
                  this.props.newOrderStatus.finished &&
                  !this.props.newOrderStatus.error
                  ){
                  this.props.history.replace("/orders");
            }
      }

      saveOrder = () =>{
            const newOrder = {
                  userId: this.props.userId,
                  orts: this.props.ingredients,
                  dun: this.props.price,
                  hayag: {
                        name: this.state.name,
                        city: this.state.city,
                        street: this.state.street
                  }
            };
            this.props.saveOrderAction(newOrder);
            // this.setState({loading: true });
            // axios
            // .post("/orders.json", order)
            // .then(response => {
            //       console.log("order amjilttai");
            // })
            // .catch(error => {
            //       console.log("order amjiltgvi: " + error);
            // })
            // .finally(() => {
            //       this.setState({loading: false});
            //       this.props.history.replace("/orders");
            // });
      };

      render(){
console.log(this.props);
            return (
            <div className={css.container}>
            Дүн : {this.props.price}
            <div>
                  {this.props.newOrderStatus.error && `zahialahga hiihhed aldaa garlaa : ${this.props.newOrderStatus.error}`}
            </div>
            {this.props.newOrderStatus.saving ? ( 

            <Spinner/> 
            ) : (
                  <div>
                  <input onChange={this.changeName} 
                  style={{marginTop:72 }} 
                  type = "text" name="name" 
                  placeholder="Таны нэр">

                  </input>
            <input onChange={this.changeStreet} 
            type = "text" 
            name="street" 
            placeholder="Таны гэрийн хаяг ">

            </input>
            <input onChange={this.changeCity}
            type = "text" 
            name="city" placeholder="Таны хот">

            </input>
            <Button text ="Илгээх" btnType="Success" daragdsan={this.saveOrder}/>
            </div>
            )}
            </div>
            );
      }
}


const mapStateToProps = state =>{
      return{
            price: state.burgerReducer.totalPrice,
            ingredients: state.burgerReducer.ingredients,
            newOrderStatus: state.orderReducer.newOrder,
            userId: state.signuploginReducer.userId
            


      };
};

const mapDispatchToProps = dispatch =>{
      return{
            saveOrderAction: newOrder => dispatch(actions.saveOrder(newOrder))
      };
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps ) (ContactData));