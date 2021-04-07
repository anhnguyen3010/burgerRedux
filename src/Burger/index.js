import React from "react";
import Beef from "./Beef";
import Cheese from "./Cheese";
import Salad from "./Salad";
import { useSelector, useDispatch } from "react-redux";
import Menu from "./Menu";
import {Button,Alert} from 'reactstrap'
import {resetMenu} from '../redux/actions/burgerAction'

export default function Burger() {
  const {burger,menu,total} = useSelector((state) => state.burgers);
  const dispatch = useDispatch();
  // const {burger} = burgers;
  // const burger = burgers.burger;
  console.log(burger);
  const handleOrder = () =>{
    alert("Paid")
    dispatch(resetMenu());
    
  }

  return (
    <div className='row container my-4'>
      <div className="container col-sm-6">
        <div className="breadTop"></div>
        <div>
          <Cheese burger={burger}/>
          <Beef burger={burger}/>
          <Salad burger={burger}/>
        </div>
        <div className="breadBottom d-flex align-items-center justify-content-center">
            <h3 style={{color:'#333'}}>Total:{total}$</h3>
        </div> 
      </div>
      <div className='col-sm-6'>
        <Menu burger={burger} menu={menu}/>
      </div>
      <div className='container text-center p-4'>
        <Button color='success'
        className='px-4'
          onClick={handleOrder}

        >
          Order
          </Button>
      </div>

    </div>
  );
}
