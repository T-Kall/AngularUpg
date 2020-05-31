import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'


// const initState = {
//     shoppingcart: [],
//     totalCartQuantity: 0,
//     totalCartAmount: 0
// }

const initialState: number = 0

export function ShoppingCartQuantityReducer(state = initialState, action: Actions) {
    switch(action.type){
        case ActionTypes.SHOPPINGCART_QUANTITY :
            console.log('test2:', state)
            return state = action.payload


        default: 
            return state
    }
}

