

export interface IProduct {
    _id?: string
    name?: string
    description?: string
    price?: number
    shortDescription?: string
    quantity?: number
    shipping?: string
    image?: string
    inStockAmount?: number


}
// ? kan vara tom // ! då måste den vara så

// export class Product extends Iproduct  {

// }


//schema från webapi
// _id:                mongodb.Schema.Types.ObjectId,
// name:               { type: String, required: true },
// description:        { type: String, required: true },
// shortDescription:   { type: String, required: true },
// image:              { type: String, required: true },
// inStockAmount:      { type: Number, required: true },
// price:              { type: Number, required: true },
// quantity:           { type: Number, required: true },
// shipping:           { type: String, required: true },

// created:            { type: Date, default: Date.now },
// modified:           { type: Date, default: Date.now }   