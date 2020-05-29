import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'
// import { IProduct } from '../../models/iproduct.model'
import { IShoppingCart } from 'src/app/models/ishoppingcart.model'

const initialState: Array<IShoppingCart> = [] 

export function ShoppingCartReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case ActionTypes.SHOPPINGCART_ADD:
            return state = [...state, action.payload]

        case ActionTypes.SHOPPINGCART_REMOVE:
            return state = state.filter(item => item.product._id !== action.payload)

        case ActionTypes.SHOPPINGCART_CLEAR:
            return state = initialState

        case ActionTypes.SHOPPINGCART_INCREMENT:
            let _iIndex = state.findIndex(item => { return item.product._id === action.payload.product._id })
            return state.map((item, index) => {
                if (index !== _iIndex)
                    return item
                
               let newItem : IShoppingCart = { product: item.product, quantity: item.quantity + 1 }
                // let newItem = { product: item.product, quantity: item.quantity + 1 }
                return newItem
            })


        case ActionTypes.SHOPPINGCART_DECREMENT:
            let _dIndex = state.findIndex(item => { return item.product._id === action.payload.product._id })
            return state.map((item, index) => {
                if (index !== _dIndex)
                    return item

                let newItem: IShoppingCart = { product: item.product, quantity: item.quantity - 1 }
                return newItem
            })



        default:
            return state
    }
}