import React from 'react'

export default function Beef({burger}) {
    const beef = burger.find((item) => item.name === "beef");
  const amountBeef = beef.amount;
  const beefContent = () =>{
    let arrayBeef=[];
    for(let i = 0; i< amountBeef; i++){
      arrayBeef.push(<div key={i} className="beef"></div>);
    }
    return arrayBeef;
  }
  return (
    <div>
      {beefContent()}
    </div>
  );
}
