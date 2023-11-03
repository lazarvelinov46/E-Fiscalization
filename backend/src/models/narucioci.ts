import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Narucilac = new Schema({
    vlasnik: {
        type: String
    },
    narucilacPib: {
        type: String
    },
    brojDana: {
        type: Number
    },
    procenatRabata: {
        type: Number
    }
})

export default mongoose.model('NarucilacModel', Narucilac, 'narucilac')