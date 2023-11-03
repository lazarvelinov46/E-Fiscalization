import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Sto = new Schema({
    pib: {
        type: String
    },
    objekat:{
        type:String
    },
    odeljenje: {
        type: String
    },
    naziv: {
        type: String
    },
    oblik: {
        type: String
    },
    sirina:{
        type:Number
    },
    visina:{
        type:Number
    },
    x:{
        type:Number
    },
    y:{
        type:Number
    }
})

export default mongoose.model('StoModel', Sto, 'sto')