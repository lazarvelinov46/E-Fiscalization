import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Korisnik = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    vrsta: {
        type: String
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    telefon: {
        type: String
    },
    licna_karta: {
        type: String
    },
    prviPut:{
        type:Boolean
    },
    email:{
        type:String
    }
})

export default mongoose.model('KorisnikModel', Korisnik, 'korisnik')