import express from 'express'
import IzvestajModel from '../models/izvestaj'


export class IzvestajController{
    apdejtujIzvestaj = (req: express.Request, res: express.Response)=>{
        let pib = req.body.pib;
        let preduzece = req.body.preduzece;
        let iznos= req.body.iznos;
        let porez=req.body.porez;
        let datum=req.body.datum;
        let msg='err'

        IzvestajModel.findOne({'pib': pib,'datum':{$regex:datum}}, (err, izvestaj)=>{
            if(err) console.log(err)
            else {
                if(izvestaj){
                    IzvestajModel.updateOne({'pib': pib,'datum':{$regex:datum}}, {$inc: {'iznos':iznos}}, (err, resp)=>{
                        if(err){
                            console.log(err)
                            res.json({'message':'error'})
                        }
                    })
                    IzvestajModel.updateOne({'pib': pib,'datum':{$regex:datum}}, {$inc: {'porez': porez}}, (err, resp)=>{
                        if(err){
                            console.log(err)
                            res.json({'message':'error'})
                        }
                        else {
                            res.json({'message':'ok'})
                        }
                    })

                    
                }
                else{
                    let izv = new IzvestajModel({
            
                        pib: pib,
                        preduzece: preduzece,
                        iznos:iznos,
                        porez: porez,
                        datum: datum
                    })
                    izv.save((err,resp)=>{
                        if(err){
                            console.log(err)
                            res.json({'message':'error'})
                        }else{
                            res.json({'message':'ok'})
                        }
                    })
                }
            }
        })
    }
    dohvatiPib=(req: express.Request, res: express.Response)=>{
        let pib = req.query.param;

        IzvestajModel.find({'pib': pib}, (err, izvestaji)=>{
            if(err) console.log(err);
            else res.json(izvestaji)
        })
    }
    dohvatiPred=(req: express.Request, res: express.Response)=>{
        let preduzece = req.query.param;

        IzvestajModel.find({'preduzece': preduzece}, (err, izvestaji)=>{
            if(err) console.log(err);
            else res.json(izvestaji)
        })
    }
    dohvatiSve=(req: express.Request, res: express.Response)=>{

        IzvestajModel.find({}, (err, izvestaji)=>{
            if(err) console.log(err);
            else res.json(izvestaji)
        })
    }
}