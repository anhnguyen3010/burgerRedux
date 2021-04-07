import React from 'react'

export default function Salad({burger}) {
    const salad = burger.find((item) => item.name ==='salad')
    return (
       
            <div className='salad text-center align-item-center'>
                <span className='font-weight-bold'>Amount: {salad.amount}</span>
            </div>
        
    )
}
