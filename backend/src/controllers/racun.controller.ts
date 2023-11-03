import express from 'express'
import RacunModel from '../models/racuni'


export class RacunController{
    dodajRacun=(req:express.Request,res:express.Response)=>{
        let racun=new RacunModel({
            pib: req.body.pib,
            idp:req.body.idp,
            preduzece:req.body.preduzece,
            objekat:req.body.objekat,
            stavke:req.body.stavke,
            cena:req.body.cena,
            porez:req.body.porez,
            odeljenje:req.body.odeljenje,
            sto:req.body.sto,
            zatvoren:false,
            nacinPlacanja:"",
            placeno:-1,
            kusur:-1,
            licnaKarta:"",
            ime:"",
            prezime:"",
            brojRacuna:"",
            narucioc:null,
            datum:null
            
        })

        racun.save((err,resp)=>{
            if(err){
                console.log(err)
                res.json({"message": "error"})
            }
            else res.json({"message": "ok"})
        })
    }
    dohvatiRacune=(req:express.Request,res:express.Response)=>{
        let pib=req.body.pib
        RacunModel.find({'pib': pib}, (err, racuni)=>{
            if(err) console.log(err);
            else{
                res.json(racuni);
            }
        })
    }
    dohvatiSveRacune=(req:express.Request,res:express.Response)=>{
        RacunModel.find({}, (err, racuni)=>{
            if(err) console.log(err);
            else{
                res.json(racuni);
            }
        })
    }
    dohvatiLicna=(req:express.Request,res:express.Response)=>{
        let licnaKarta=req.body.licnaKarta
        RacunModel.find({'licnaKarta': licnaKarta}, (err, racuni)=>{
            if(err) console.log(err);
            else{
                res.json(racuni);
            }
        })
    }
    apdejtujRacun=(req:express.Request,res:express.Response)=>{
        let pib=req.body.pib;
        let idp=req.body.idp;
        let stavke=req.body.stavke;
        let cena=req.body.cena;
        let porez=req.body.porez;
        let odeljenje=req.body.odeljenje;
        let sto=req.body.sto;
        let msg=""
        RacunModel.updateOne({'pib': pib,'idp':idp},{$set: {'stavke':stavke}}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'cena':cena}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'porez':porez}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'odeljenje':odeljenje}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'sto':sto}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        if(msg=="err"){
            
            res.json({'message':'err'})
        }else{
            
            res.json({'message':'ok'})
        }
    }
    zatvoriGotovina=(req:express.Request,res:express.Response)=>{
        let pib=req.body.pib;
        let idp=req.body.idp;
        let vrednost=req.body.vrednost;
        let kusur=req.body.kusur;
        let lk=req.body.lk
        let zatvoren=true
        let np='gotovina'
        let datum=req.body.datum
        let msg=""
        RacunModel.updateOne({'pib': pib,'idp':idp},{'zatvoren':zatvoren}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'nacinPlacanja':np}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'placeno':vrednost}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'kusur':kusur}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'licnaKarta':lk}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'datum':datum}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        if(msg=="err"){
            
            res.json({'message':'err'})
        }else{
            
            res.json({'message':'ok'})
        }
    }
    zatvoriCek=(req:express.Request,res:express.Response)=>{
        let pib=req.body.pib;
        let idp=req.body.idp;
        let ime=req.body.ime;
        let prezime=req.body.prezime;
        let lk=req.body.lk
        let zatvoren=true
        let datum=req.body.datum
        let np='cek'
        let msg=""
        RacunModel.updateOne({'pib': pib,'idp':idp},{'zatvoren':zatvoren}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'nacinPlacanja':np}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'ime':ime}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'prezime':prezime}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'licnaKarta':lk}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'datum':datum}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        if(msg=="err"){
            
            res.json({'message':'err'})
        }else{
            
            res.json({'message':'ok'})
        }
    }
    zatvoriKartica=(req:express.Request,res:express.Response)=>{
        let pib=req.body.pib;
        let idp=req.body.idp;
        let lk=req.body.lk;
        let slipRacun=req.body.slipRacun
        let zatvoren=true
        let datum=req.body.datum
        let np='kartica'
        let msg=""
        RacunModel.updateOne({'pib': pib,'idp':idp},{'zatvoren':zatvoren}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'nacinPlacanja':np}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'brojRacuna':slipRacun}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'licnaKarta':lk}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'datum':datum}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        if(msg=="err"){
            
            res.json({'message':'err'})
        }else{
            
            res.json({'message':'ok'})
        }
    }
    zatvoriVirman=(req:express.Request,res:express.Response)=>{
        let pib=req.body.pib;
        let idp=req.body.idp;
        let narucilac=req.body.narucilac;
        let zatvoren=true
        let datum=req.body.datum
        let np='virman'
        let msg=""
        RacunModel.updateOne({'pib': pib,'idp':idp},{'zatvoren':zatvoren}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'nacinPlacanja':np}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'narucioc':narucilac}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        RacunModel.updateOne({'pib': pib,'idp':idp},{'datum':datum}, (err, racuni)=>{
            if(err) msg='err'
            else{
                msg='ok'
            }
        })
        if(msg=="err"){
            
            res.json({'message':'err'})
        }else{
            
            res.json({'message':'ok'})
        }
    }
}