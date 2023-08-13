import React, {useState} from "react";
import BuildControls from "../../components/BuildControls";
import Burger from  "../../components/Burger"
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import { useHistory } from "react-router-dom";




const BurgerBuilder = props => {

      const history = useHistory();
      console.log("props:", props);
      const [confirmOrder,setConfirmOrder] = useState(false);
      
      
      
      const continueOrder = () => {
            history.push('/ship');
            };
            
                  
      
      const showConfitmModal = () => {
            setConfirmOrder(true);
            
      };
      const closeConfitmModal = () => {
            setConfirmOrder(false);
            
      };
      
      
      
            return(
                  <div>

                  
                  <Modal closeConfitmModal={closeConfitmModal} show ={confirmOrder}>

                        
                        <OrderSummary onCancel={closeConfitmModal}
                        onContinue={continueOrder}
                        
                        />
                        
                              
                  </Modal>
                        
                        <Burger/>
                        <BuildControls 
                        showConfitmModal= {showConfitmModal}
                        />
                        
                  </div>
            );
      }



export default  BurgerBuilder;