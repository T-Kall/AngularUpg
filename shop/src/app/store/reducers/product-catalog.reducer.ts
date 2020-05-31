import { Actions } from '../actions/product-catalog.actions'
import { ActionTypes } from '../actiontypes'
import { IProduct } from '../../models/iproduct.model'


const initialState: Array<IProduct> = [] //tom array

export function ProductCatalogReducer(state = initialState, action: Actions) {
    switch(action.type) {
        case ActionTypes.PRODUCTCATALOG_SET :
            console.log(action.payload)
            return state = action.payload

        case ActionTypes.PRODUCTCATALOG_CLEAR :
            return state = initialState //tom

        default: 
            return state
    }
}





//UTFÖR DE OLIKA SAKERNA