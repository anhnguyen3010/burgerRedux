import React from 'react'


export default function Cheese({burger}) {
    const cheese = burger.find((item)=> item.name==='cheese')
    console.log(cheese)
    return (
        
        <div className='cheese text-center'>
            <span className='font-weight-bold'>Amount: {cheese.amount}</span>
        </div>
    )
}
