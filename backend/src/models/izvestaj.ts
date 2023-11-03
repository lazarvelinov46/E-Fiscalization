import mongoose from "mongoose";

const Schema = mongoose.Schema;

    
let Izvestaj = new Schema({
    pib: {
        type: String
    },
    preduzece:{
        type:String
    },
    iznos: {
        type: Number
    },
    porez: {
        type: Number
    },
    datum:{
        type:String
    }
    
})

export default mongoose.model('IzvestajModel', Izvestaj, 'izvestaj')