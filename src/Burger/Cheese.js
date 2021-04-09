import React from "react";

export default function Cheese({ burger }) {
  const cheese = burger.find((item) => item.name === "cheese");
  const amountCheese = cheese.amount;
  const cheeseContent = () =>{
    let arrayCheese=[];
    for(let i = 0; i< amountCheese; i++){
      arrayCheese.push(<div key={i} className="cheese"></div>);
    }
    return arrayCheese;
  }
  return (
    <div>
      {cheeseContent()}
    </div>
  );
}
