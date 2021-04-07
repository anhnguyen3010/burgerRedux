import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {changeIncrease,changeDecrease} from '../redux/actions/burgerAction'

export default function Menu({burger,menu}) {
  // const { burger, menu } = useSelector((state) => state.burgers);
  //change method
  /**
   * nếu click + thì giảm trong menu và tăng trong burger
   * nếu click - thì tăng trong menu và giảm trong burger
   */
  const dispatch = useDispatch()

  const handleIncrease = (item) =>{
      dispatch(changeIncrease(item))
  }
  const handleDecrease = (item) =>{
      dispatch(changeDecrease(item))
  }
  
  return (
    <div className="container my-4">
      <h1 className="my-4 text-center text-secondary">Menu Burger</h1>
      <ListGroup horizontal className='d-flex justify-content-center'>
        {burger.map((item) => (
          <ListGroupItem key={item.name}
          className='p-0 mr-2'>
            <Card
              body
              inverse
              style={{ backgroundColor: "#b2dfdb", borderColor: "#333" }
            }
                className='menu__card'
            >
              <CardTitle tag="h5" style={{color:'#333'}}>
                  <p className='text-primary'>{item.name.toUpperCase()}: {item.amount}</p>
                  <p className='text-danger'>Price: {menu[item.name]}</p>
                  <p className='text-success'>Total: {menu[item.name]*item.amount}</p>
              </CardTitle>
              <CardText></CardText>
              <div className="d-flex">
                <Button color="success" className="mr-2"
                onClick={()=>handleIncrease(item)}
                >
                  +
                </Button>
                <Button color="danger"
                onClick={()=>handleDecrease(item)}
                disabled={!item.amount}
                >-</Button>
              </div>
            </Card>
          </ListGroupItem>
        ))}
        
      </ListGroup>
    </div>
  );
}
