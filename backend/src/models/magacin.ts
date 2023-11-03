import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Magacin = new Schema({
    
    id:{
        type:Number
    },
    naziv:{
        type:String
    }
})

export default mongoose.model('MagacinModel', Magacin, 'magacin')