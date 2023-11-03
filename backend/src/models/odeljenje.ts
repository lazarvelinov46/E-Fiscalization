import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Odeljenje = new Schema({
    pib:{
        type:String
    },
    objekat:{
        type:String
    },
    naziv:{
        type:String
    }
})

export default mongoose.model('OdeljenjeModel', Odeljenje, 'odeljenje')