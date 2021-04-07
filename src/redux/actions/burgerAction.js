import {CHANGE_INCREASE,CHANGE_DECREASE,RESET_MENU} from '../contants/burgerContant'

export const changeIncrease =(item)=>{
    return(
            {
                type:CHANGE_INCREASE,
                payload:{
                    name:item.name
                }
            }
        ) 
        
}
export const changeDecrease =(item)=>{
    return(
            {
                type:CHANGE_DECREASE,
                payload:{
                    name:item.name
                }
            }
        ) 
        
}
export const resetMenu =()=>{
    return(
            {
                type:RESET_MENU,
                payload:{
                    burger: [
                        {
                          name: "salad",
                          amount: 1,
                        },
                        {
                          name: "cheese",
                          amount: 1,
                        },
                        {
                          name: "beef",
                          amount: 1,
                        },
                    ]
                }
            }
    ) 
        
}