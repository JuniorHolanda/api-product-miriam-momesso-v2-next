import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    thumbnail: {type: String, required: true},
    altthumbnail: {type: String, required: true},
    title: {type: String, required: true},
    smalltext: {type: String, required: true},
    text: {type: String, required: true},
    category: {
        main: [{type: String, required: true}],
        holiday: [{type: String}]
    },
    code: {type: String},
    measure: [{type: String, required: true}],
    gallery: [
        {
        img: String,
        altimg: String
        }
    ],
    like: {type: Number, default: 0}
})

const Products = mongoose.model('Products', productSchema)

export default Products;