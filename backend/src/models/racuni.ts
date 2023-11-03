import mongoose from "mongoose";

const Schema = mongoose.Schema;

    
let Racun = new Schema({
    pib: {
        type: String
    },
    idp:{
        type:Number
    },
    preduzece:{
        type:String
    },
    objekat:{
        type:String
    },
    stavke: {
        type: Array
    },
    cena: {
        type: Number
    },
    porez: {
        type: Number
    },
    odeljenje:{
        type:String
    },
    sto:{
        type:String
    },
    zatvoren:{
        type:Boolean
    },
    nacinPlacanja:{
        type:String
    },
    placeno:{
        type:Number
    },
    kusur:{
        type:Number
    },
    licnaKarta:{
        type:String
    },
    ime:{
        type:String
    },
    prezime:{
        type:String
    },
    brojRacuna:{
        type:String
    },
    narucioc:{
        type:Object
    },
    datum:{
        type:String
    }
    
})

export default mongoose.model('RacunModel', Racun, 'racun')