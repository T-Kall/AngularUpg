import { IProduct } from './iproduct.model';
import { IShoppingCart } from './ishoppingcart.model';

export interface IState {
    readonly productcatalog: Array<IProduct>
    readonly product: IProduct
    readonly shoppingcart: Array<IShoppingCart>
    readonly shoppingcartAmount: number
    readonly shoppingcartQuantity: number

}