import React from 'react'

export default function Beef({burger}) {
    const beef = burger.find((item) => item.name === "beef");
  const amountBeef = beef.amount;
  const arrayBeef=[]

  for(let i = 0; i < amountBeef; i++){
    arrayBeef.push(i);
  }
  return (
    <div>
      {arrayBeef.map((item) => (
        <div key={item} className="beef"></div>
      ))}
    </div>
  );
}
