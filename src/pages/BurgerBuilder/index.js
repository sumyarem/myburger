import React, {Component} from "react";
import BuildControls from "../../components/BuildControls";
import Burger from  "../../components/Burger"
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/burgerActions";
import { withRouter } from "react-router-dom";


class BurgerBuilder extends Component {
      
      state = {
            
            
            confirmOrder:false,
      
      };
      componentDidMount = () => {
      };
      continueOrder = () => {
            console.log("this.props.history:", this.props.history.push);
            this.props.history.push('/ship');
            };
            
                  
      
      showConfitmModal = () => {
            this.setState({confirmOrder:true});
      };
      closeConfitmModal = () => {
            this.setState({confirmOrder:false});
      };
      
      render(){
      
            return(
                  <div>

                  
                  <Modal closeConfitmModal={this.closeConfitmModal} show ={this.state.confirmOrder}>

                        {this.state.loading ? ( 
                              <Spinner /> ) : (
                        <OrderSummary onCancel={this.closeConfitmModal}
                        onContinue={this.continueOrder}
                        
                        />
                              )}
                              
                  </Modal>
                  
                        <Burger/>
                        <BuildControls 
                        showConfitmModal= {this.showConfitmModal}
                        
                        
                        
                        
                        ortsNemeh={this.props.burgertOrtsNem} ortsHasah={this.props.burgertOrtsHas}/>
                        
                  </div>
            );
      }
}


export default  withRouter(BurgerBuilder);