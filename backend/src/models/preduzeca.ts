import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Preduzece = new Schema({
    vlasnik:{
        type:String
    },
    naziv: {
        type: String
    },
    adresa: {
        type: String
    },
    pib: {
        type: String
    },
    matbroj: {
        type: String
    },
    slika:{
        type:String
    },
    status:{
        type:String
    },
    
    kategorija:{
        type:String
    },
    sifraDelatnosti:{
        type:Array
    },
    pdv:{
        type:Boolean
    },
    racuni:{
        type:Array
        
    },
    magacini:{
        type:Array
    
    },
    kase:{
        type:Array
        
    }
   
})

export default mongoose.model('PreduzeceModel', Preduzece, 'preduzece')