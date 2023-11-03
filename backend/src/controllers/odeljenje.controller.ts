import express from 'express'
import OdeljenjeModel from '../models/odeljenje'


export class OdeljenjeController{
    dodajOdeljenje=(req:express.Request,res:express.Response)=>{
        let odeljenjeModel=new OdeljenjeModel({
            pib:req.body.pib,
            objekat:req.body.objekat,
            naziv:req.body.naziv
        })

        odeljenjeModel.save((err,resp)=>{
            if(err) {
                console.log(err)
                res.json({"message": "error"})

            }else{
                res.json({'message':'ok'})
            }
        })
    }
    dohvatiOdeljenja=(req:express.Request,res:express.Response)=>{
        let pib=req.body.pib
        let objekat=req.body.objekat
        OdeljenjeModel.find({'pib': pib,'objekat':objekat}, (err, odeljenja)=>{
            if(err) console.log(err)
            else res.json(odeljenja)
        })
    }
}