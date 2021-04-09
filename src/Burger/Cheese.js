import React from "react";

export default function Cheese({ burger }) {
  const cheese = burger.find((item) => item.name === "cheese");
  const amountCheese = cheese.amount;
  const arrayCheese=[]

  for(let i = 0; i < amountCheese; i++){
    arrayCheese.push(i);
  }
  return (
    <div>
      {arrayCheese.map((item) => (
        <div key={item} className="cheese"></div>
      ))}
    </div>
  );
}
