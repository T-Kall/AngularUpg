import { Actions } from '../actions/product.actions'
import { ActionTypes } from '../actiontypes'
import { IProduct } from '../../models/iproduct.model'

const initialState: IProduct = {} //objekt av typen Iproduct

export function ProductReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case ActionTypes.PRODUCT_SET:
            console.log('test1:', state)
           
            return state = action.payload

        case ActionTypes.PRODUCT_CLEAR:
            return state = initialState

        default:
            return state
    }
}