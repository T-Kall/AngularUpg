import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'


const initialState: number = 0

export function ShoppingCartAmountReducer(state = initialState, action: Actions) {
    switch(action.type){
        case ActionTypes.SHOPPINGCART_AMOUNT:
            return state = action.payload

        default: 
            return state
    }
}