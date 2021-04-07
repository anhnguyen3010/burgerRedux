import {combineReducers} from 'redux'

import burgerReducer from './burgerReducer'

const rootReducer = combineReducers({
    burgers: burgerReducer,
})
export default rootReducer