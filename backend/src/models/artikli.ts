import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Artikl = new Schema({
    pib:{
        type:String
    },
    sifra:{
        type:String
    },
    naziv:{
        type:String
    },
    jedinicaMere:{
        type:String
    },
    poreskaStopa:{
        type:Number
    },
    vrsta:{
        type:String
    },
    zemljaPorekla:{
        type:String
    },
    straniNaziv:{
        type:String
    },
    barkod:{
        type:String
    },
    proizvodjac:{
        type:String
    },
    carinskaTarifa:{
        type:Number
    },
    ekoTaksa:{
        type:Boolean
    },
    akcize:{
        type:Boolean
    },
    minZalihe:{
        type:Number
    },
    maxZalihe:{
        type:Number
    },
    opis:{
        type:String
    },
    deklaracija:{
        type:String
    },
    slika:{
        type:String
    },
    robamagacin:{
        type:Array
    },
    robaobjekat:{
        type:Array
    },
    kategorija:{
        type:String
    },
    potkategorija:{
        type:String
    }
    
})

export default mongoose.model('ArtiklModel', Artikl, 'artikl')