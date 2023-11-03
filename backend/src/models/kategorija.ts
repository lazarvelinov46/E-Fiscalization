import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Kategorija = new Schema({
    pib:{
        type:String
    },
    naziv:{
        type:String
    },
    potkategorije:{
        type:Array
    }
})

export default mongoose.model('KategorijaModel', Kategorija, 'kategorija')