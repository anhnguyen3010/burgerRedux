import React from 'react'

export default function Salad({burger}) {
    const salad = burger.find((item) => item.name === "salad");
  const amountSalad = salad.amount;
  const arraySalad=[]

  for(let i = 0; i < amountSalad; i++){
    arraySalad.push(i);
  }
  return (
    <div>
      {arraySalad.map((item) => (
        <div key={item} className="salad"></div>
      ))}
    </div>
  );
}
