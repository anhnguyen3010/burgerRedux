import React from 'react'

export default function Beef({burger}) {
    const beef = burger.find((item) => item.name ==='beef')
    return (
        <div className='beef text-center'>
            <span className='font-weight-bold'>Amount: {beef.amount}</span>
        </div>
    )
}
