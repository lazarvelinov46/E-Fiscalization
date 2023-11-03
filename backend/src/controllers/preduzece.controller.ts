import express from 'express'
import PreduzeceModel from '../models/preduzeca'
import KorisnikModel from '../models/korisnici'
import preduzeca from '../models/preduzeca'

export class PreduzeceController{
    register=(req:express.Request,res:express.Response)=>{
        let preduzece = new PreduzeceModel({
            vlasnik: req.body.username,
            naziv:req.body.naziv,
            adresa:req.body.adresa,
            pib:req.body.pib,
            matbroj:req.body.matbroj,
            slika:req.body.slika,
            status:"neodredjen",
            kategorija:"",
            sifraDelatnosti:[],
            pdv:false,
            racuni:[],
            magacini:[],
            kase:[]
        })
        let korisnici = new KorisnikModel({
            
            username: req.body.username,
            password: req.body.password,
            vrsta:"preduzece",
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.kontaktTel,
            licna_karta:"",
            prviPut:req.body.prvi,
            email:req.body.email,
        })
        let msg=''
        KorisnikModel.findOne({'username': korisnici.username},(err, user)=>{
            if(err) console.log(err);
            else{
                if(user){
                    res.json({"message":'Korisnicko ime zauzeto. '})
                }else{
                    KorisnikModel.findOne({'email': korisnici.email},(err,u2)=>{
                        if(err) console.log(err)
                        else{
                            if(u2){
                                res.json({"message":'Vec je registrovan naalog sa ovim mejlom. '})
                                
                            }else{
                                PreduzeceModel.findOne({'pib':preduzece.pib},(err,p)=>{
                                    if(err) console.log(err)
                                    else{
                                        if(p){
                                            res.json({"message":'Vec postoji preduzece sa ovim pibom. '})
                                        }else{
                                            korisnici.save((err,resp)=>{
                                                if(err){
                                                    console.log(err);
                                                    
                                                    res.json({"message":'Error'})
                                                }
                                            })
                                    
                                            preduzece.save((err, resp)=>{
                                                if(err) {
                                                    console.log(err);
                                                    res.json({"message":'Error'})
                                                }
                                                res.json({"message":'ok'})
                                            })
                                        }
                                    }
                                })
                            }
                        }
                    })
                }
            }
        })
        /*
        if(msg=='ok'){
            res.json({"message":'ok'})
        }else{
            res.json({"message":msg})
        }
        */
        
    }

    aktiviraj=(req:express.Request,res:express.Response)=>{
       
        
        PreduzeceModel.updateOne({'pib':req.body.pib},{'status':'aktivan'},(err,resp)=>{
            if(err)console.log(err)
            else res.json({"message":'ok'})
        })
    }
    deaktiviraj=(req:express.Request,res:express.Response)=>{
       
        
        PreduzeceModel.updateOne({'pib':req.body.pib},{'status':'neaktivan'},(err,resp)=>{
            if(err)console.log(err)
            else res.json({"message":'ok'})
        })
    }
    dohvatiPreduzeca=(req:express.Request,res:express.Response)=>{
        
        PreduzeceModel.find({},(err,preduzeca)=>{
            if(err)console.log(err);
            else res.json(preduzeca);
        })
    }
    dohvatiPreduzece=(req:express.Request,res:express.Response)=>{
        let vlasnik=req.body.vlasnik
        PreduzeceModel.findOne({'vlasnik':vlasnik},(err,preduzece)=>{
            if(err)console.log(err);
            else res.json(preduzece);
        })
    }
    dohvatiPoPib=(req:express.Request,res:express.Response)=>{
        let pib=req.body.pib
        PreduzeceModel.findOne({'pib':pib},(err,preduzece)=>{
            if(err)console.log(err);
            else res.json(preduzece);
        })
    }
    apdejtuj=(req:express.Request,res:express.Response)=>{
        let vlasnik=req.body.username;
        let ime=req.body.ime;
        let prezime=req.body.prezime;
        let email=req.body.email;
        let telefon=req.body.telefon;
        let naziv=req.body.naziv;
        let adresa=req.body.adresa;
        let kategorija=req.body.kategorija;
        let sifre=req.body.sifre;
        let pdv=req.body.pdv;
        let banke=req.body.banke;
        let magacini=req.body.magacini;
        let kase=req.body.kase;
        KorisnikModel.updateOne({'username':vlasnik},{'ime':ime},(err,resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err ime"})
            } 
        })
        KorisnikModel.updateOne({'username':vlasnik},{'prezime':prezime},(err,resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err prezime"})
            } 
        })
        KorisnikModel.updateOne({'username':vlasnik},{'email':email},(err,resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err email"})
            } 
        })
        KorisnikModel.updateOne({'username':vlasnik},{'telefon':telefon},(err,resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err telefon"})
            } 
        })
        PreduzeceModel.updateOne({'vlasnik':vlasnik},{'naziv':naziv},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err naziv"})
            } 
        })
        PreduzeceModel.updateOne({'vlasnik':vlasnik},{'adresa':adresa},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err adresa"})
            } 
        })
        PreduzeceModel.updateOne({'vlasnik':vlasnik},{'kategorija':kategorija},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err kategorija"})
            } 
        })
        PreduzeceModel.updateOne({'vlasnik':vlasnik},{$set: {'sifraDelatnosti':sifre}},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err sifre"})
            } 
        })
        PreduzeceModel.updateOne({'vlasnik':vlasnik},{'pdv':pdv},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err pdv"})
            } 
        })
        PreduzeceModel.updateOne({'vlasnik':vlasnik},{$set: {'racuni':banke}},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err racuni"})
            } 
        })
        PreduzeceModel.updateOne({'vlasnik':vlasnik},{$set: {'magacini':magacini}},(err, resp)=>{
            if(err){
                console.log(err)
                
                res.json({'message':"err magacini"})
            } 
        })
        PreduzeceModel.updateOne({'vlasnik':vlasnik},{$set: {'kase':kase}},(err, resp)=>{
            if(err) {
                console.log(err)
                res.json({'message':"err kase"})
            } 
            else {
                res.json({'message':'ok'})
            }
        })
    }
    zavrsiRegistraciju=(req:express.Request,res:express.Response)=>{
        let vlasnik=req.body.user;
        let kategorija=req.body.kategorija;
        let sifre=req.body.sifre;
        let pdv=req.body.pdv;
        let banke=req.body.banke;
        let magacini=req.body.magacini;
        let kase=req.body.kase;
        KorisnikModel.updateOne({'username':vlasnik},{'prviPut':false},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err prvi"})
            } 
        })
        PreduzeceModel.updateOne({'vlasnik':vlasnik},{'kategorija':kategorija},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err kategorija"})
            } 
        })
        PreduzeceModel.updateOne({'vlasnik':vlasnik},{$set: {'sifraDelatnosti':sifre}},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err sifre"})
            } 
        })
        PreduzeceModel.updateOne({'vlasnik':vlasnik},{'pdv':pdv},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err pdv"})
            } 
        })
        PreduzeceModel.updateOne({'vlasnik':vlasnik},{$set: {'racuni':banke}},(err, resp)=>{
            if(err){
                console.log(err)
                res.json({'message':"err racuni"})
            } 
        })
        PreduzeceModel.updateOne({'vlasnik':vlasnik},{$set: {'magacini':magacini}},(err, resp)=>{
            if(err){
                console.log(err)
                
                res.json({'message':"err magacini"})
            } 
        })
        PreduzeceModel.updateOne({'vlasnik':vlasnik},{$set: {'kase':kase}},(err, resp)=>{
            if(err) {
                console.log(err)
                res.json({'message':"err kase"})
            } 
            else {
                res.json({'message':'ok'})
            }
        })
    }
    pretraziPoPib=(req:express.Request,res:express.Response)=>{
        let pib=req.body.pib;
        PreduzeceModel.findOne({'pib': pib}, (err, preduzece)=>{
            if(err) console.log(err);
            else res.json(preduzece)
        })
    }
        
}