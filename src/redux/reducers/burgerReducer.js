import { CHANGE_INCREASE, CHANGE_DECREASE, RESET_MENU } from "../contants/burgerContant";
const initialState = {
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
  ], // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
};
function burgerReducer(state = initialState, action) {
  const setTotal = ()=>{
    let newtotal = 0;
    for (let value of state.burger) {
      newtotal += value.amount * state.menu[value.name];
    }
    return newtotal;
  }

  switch (action.type) {
    case CHANGE_INCREASE: {
      const newBurger = state.burger.map((item) => {
        if (item.name === action.payload.name) {
          item.amount += 1;
        }
        return item;
      });

      let newtotal=setTotal();
      return { ...state, burger: newBurger, total: newtotal };
    }

    case CHANGE_DECREASE:{
      const newBurger = state.burger.map((item) => {
        if (item.name === action.payload.name) {
          item.amount -= 1;
        }
        return item;
      });
      let newtotal=setTotal();
      return { ...state, burger: newBurger, total: newtotal };
    }
    case RESET_MENU:{
      return {...state,
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
        ],
        total: 85,
      }
    }
    default:
      return state;
  }
}
export default burgerReducer;
