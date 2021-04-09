import React from 'react'

export default function Salad({burger}) {
    const salad = burger.find((item) => item.name === "salad");
  const amountSalad = salad.amount;
  const saladContent = () =>{
    let arraySalad=[];
    for(let i = 0; i< amountSalad; i++){
      arraySalad.push(<div key={i} className="salad"></div>);
    }
    return arraySalad;
  }
  return (
    <div>
      {saladContent()}
    </div>
  );
}
