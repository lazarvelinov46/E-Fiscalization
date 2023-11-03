import express from 'express'
import KorisnikModel from '../models/korisnici'

export class KorisnikController{
    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;

        KorisnikModel.findOne({'username': username, 'password': password}, (err, user)=>{
            if(err) console.log(err);
            else res.json(user)
        })
    }
    loginAdmin = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        let vrsta='admin';

        KorisnikModel.findOne({'username': username, 'password': password,'vrsta':vrsta}, (err, user)=>{
            if(err) console.log(err);
            else res.json(user)
        })
    }

    changepassword=(req:express.Request,res:express.Response)=>{
        let username=req.body.username;
        let password=req.body.starasif;

        KorisnikModel.findOne({'username': username, 'password': password}, (err, user)=>{
            if(err) console.log(err);
            else{
                if(user){
                    let password2=req.body.password;
                    KorisnikModel.updateOne({'username':username},{'password':password2},(err,resp)=>{
                        if(err) console.log(err)
                            else {
                                res.json({'message': 'ok'})
                            }
                    })
                }else{
                    res.json({'message': 'error'})
                }
            }
        })

    }
    dodajKupca = (req: express.Request, res: express.Response)=>{
        let korisnici = new KorisnikModel({
            
            username: req.body.username,
            password: req.body.password,
            vrsta:"kupac",
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            licna_karta:req.body.licna,
            email:"",
            prviPut:true
        })

        
        KorisnikModel.findOne({'username':korisnici.username},(err,user)=>{
            if(err)console.log(err)
            else{
                if(user){
                    res.json({'message':'Zauzeto korisnicko ime'})
                }else{
                    KorisnikModel.findOne({'licna_karta':korisnici.licna_karta},(err,user2)=>{
                        if(err)console.log(err)
                        else{
                            if(user2){
                                res.json({'message':'Zauzeta licna karta'})

                            }else{
                                korisnici.save((err,resp)=>{
                                    if(err){
                                        console.log(err);
                                        res.json({"message": "error"})
                                    }else{
                                        res.json({'message':'ok'})
                                    }
                                })
                            }
                        }
                    })
                }
            }
        })
        
    }
}