import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'
//import { IShoppingCart } from 'src/app/models/ishoppingcart.model'

''

const initialState: number = 0

export function ShoppingCartQAReducer(state = initialState, action: Actions) {
    switch(action.type){

        case ActionTypes.SHOPPINGCART_QUANTITY :
            return state = action.payload

        case ActionTypes.SHOPPINGCART_AMOUNT:
            return state = action.payload
            
        default: 
            return state
    }
}