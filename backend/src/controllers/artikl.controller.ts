import e from 'express'
import express from 'express'
import ArtiklModel from '../models/artikli'


export class ArtiklController{
    dodajArtikl=(req:express.Request,res:express.Response)=>{
        let artikl=new ArtiklModel({
            pib:req.body.pib,
            sifra:req.body.sifra,
            naziv:req.body.naziv,
            jedinicaMere:req.body.jedinicaMere,
            poreskaStopa:req.body.poreskaStopa,
            vrsta:req.body.vrsta,
            zemljaPorekla:req.body.zemljaPorekla,
            straniNaziv:req.body.straniNaziv,
            barkod:req.body.barkod,
            proizvodjac:req.body.proizvodjac,
            carinskaTarifa:req.body.carinskaTarifa,
            ekoTaksa:req.body.ekoTaksa,
            akcize:req.body.akcize,
            minZalihe:req.body.minZalihe,
            maxZalihe:req.body.maxZalihe,
            opis:req.body.opis,
            deklaracija:req.body.deklaracija,
            slika:req.body.slika,
            robamagacin:req.body.robamagacin,
            robaobjekat:req.body.robaobjekat,
            kategorija:"",
            potkategorija:""
        })
        ArtiklModel.findOne({'pib':artikl.pib,'sifra':artikl.sifra},(err,art)=>{
            if(art){
                res.json({'message':'Vec postoji artikl sa datom sifrom'})
            }else{
                artikl.save((err,resp)=>{
                    if(err){
                        console.log(err)
                        res.json({"message": "error"})
                    }
                    else res.json({"message": "ok"})
                })
            }
        })
        
    }
    izmeniArtikl=(req:express.Request,res:express.Response)=>{
            let pib=req.body.pib
            let sifra=req.body.sifra;
            let naziv=req.body.naziv;
            let jedinicaMere=req.body.jedinicaMere;
            let poreskaStopa=req.body.poreskaStopa;
            let vrsta=req.body.vrsta;
            let zemljaPorekla=req.body.zemljaPorekla;
            let straniNaziv=req.body.straniNaziv;
            let barkod=req.body.barkod;
            let proizvodjac=req.body.proizvodjac;
            let carinskaTarifa=req.body.carinskaTarifa;
            let ekoTaksa=req.body.ekoTaksa;
            let akcize=req.body.akcize;
            let minZalihe=req.body.minZalihe;
            let maxZalihe=req.body.maxZalihe;
            let opis=req.body.opis;
            let deklaracija=req.body.deklaracija;
            let slika=req.body.slika;
            let robamagacin=req.body.robamagacin;
        
            let robaobjekat=req.body.robaobjekat;
        
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'naziv':naziv},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'jedinicaMere':jedinicaMere},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'poreskaStopa':poreskaStopa},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'vrsta':vrsta},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'zemljaPorekla':zemljaPorekla},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'straniNaziv':straniNaziv},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'barkod':barkod},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'proizvodjac':proizvodjac},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'carinskaTarifa':carinskaTarifa},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'ekoTaksa':ekoTaksa},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'akcize':akcize},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'minZalihe':minZalihe},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'maxZalihe':maxZalihe},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'opis':opis},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'deklaracija':deklaracija},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{'slika':slika},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{$set: {'robamagacin':robamagacin}},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
        })
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{$set: {'robaobjekat':robaobjekat}},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':'err'})
            } 
            else {
                res.json({'message':'ok'})
            }
        })
    }
    smanjiMagacin=(req:express.Request,res:express.Response)=>{
        let sifra=req.body.sifra;
        let pib=req.body.pib;
        let robamagacin=req.body.robamagacin
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{$set: {'robamagacin':robamagacin}},(err, resp)=>{
            if(err){
                
                console.log(err)
                res.json({'message':'err'})
            } 
            else {
                res.json({'message':'ok'})
            }
        })
    }
    smanjiObjekat=(req:express.Request,res:express.Response)=>{
        let sifra=req.body.sifra;
        let pib=req.body.pib;
        let robaobjekat=req.body.robaobjekat
        ArtiklModel.updateOne({'pib':pib,'sifra':sifra},{$set: {'robaobjekat':robaobjekat}},(err, resp)=>{
            if(err){
                
                console.log(err)
                res.json({'message':'err'})
            } 
            else {
                res.json({'message':'ok'})
            }
        })
    }

    dohvatiSve=(req:express.Request,res:express.Response)=>{
        let pib=req.body.pib
        ArtiklModel.find({'pib':pib},(err,artikli)=>{
            if(err)console.log(err);
            else res.json(artikli);
        })

    }
    pretragaNaziv=(req:express.Request,res:express.Response)=>{
        let naziv=req.query.param
        ArtiklModel.find({'naziv':{$regex:naziv}},(err,artikli)=>{
            if(err)console.log(err)
            else res.json(artikli)
        })

    }
    pretragaProizvodjac=(req:express.Request,res:express.Response)=>{
        let proizvodjac=req.query.param
        ArtiklModel.find({'proizvodjac':{$regex:proizvodjac}},(err,artikli)=>{
            if(err)console.log(err)
            else res.json(artikli)
        })

    }
    dohvatiCeluBazu=(req:express.Request,res:express.Response)=>{
        ArtiklModel.find({},(err,artikli)=>{
            if(err)console.log(err);
            else res.json(artikli);
        })
    }
    obrisiArtikl=(req:express.Request,res:express.Response)=>{
        let sifra = req.body.sifra;
        let pib=req.body.pib;
        ArtiklModel.deleteOne({'pib':pib,'sifra': sifra}, (err, resp)=>{
            if(err) console.log(err);
            else res.json({'message': 'ok'})
        })
    }
    dodajKategoriju=(req:express.Request,res:express.Response)=>{
        let pib=req.body.pib
        let sifra=req.body.sifra;
        let kategorija=req.body.kategorija;
        let potkategorija=req.body.potkategorija;
        ArtiklModel.findOne({'sifra':sifra,'pib':pib},(err,artikl)=>{
            if(err){
                console.log(err);
                res.json({'message':'err'})
            }else{
                if(artikl){
                    if(artikl.kategorija!=""){
                        res.json({'message': 'postoji'})
                    }else{
                        ArtiklModel.updateOne({'sifra':sifra,'pib':pib},{'kategorija':kategorija},(err, resp)=>{
                            if(err){
                                console.log(err)
                            } 
                            else {
                            }
                        })
                        ArtiklModel.updateOne({'sifra':sifra,'pib':pib},{'potkategorija':potkategorija},(err, resp)=>{
                            if(err){
                                console.log(err)
                            } 
                            else {
                                res.json({'message':'ok'})
                            }
                        })
                    }
                }else{
                    
                    res.json({'message':'err'})
                }
            }
        })
    }
}