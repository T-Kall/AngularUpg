import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'

// const initState = {
//     shoppingcart: [],
//     totalCartQuantity: 0,
//     totalCartAmount: 0
// }

const initialState: number = 0

export function ShoppingCartAmountReducer(state = initialState, action: Actions) {
    switch(action.type){
        case ActionTypes.SHOPPINGCART_AMOUNT:
            console.log('test3:', state)
            return state = action.payload

        default: 
        //console.log('test3b: ', state)
            return state
    }
}