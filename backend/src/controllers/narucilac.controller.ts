import express from 'express'
import NarucilacModel from '../models/narucioci'


export class NarucilacController{
    dodajNaruicoca=(req:express.Request,res:express.Response)=>{
        let narucilac=new NarucilacModel({
            vlasnik:req.body.vlasnik,
            narucilacPib:req.body.narucilacPib,
            brojDana:req.body.brojDana,
            procenatRabata:req.body.procenatRabata
        })

        narucilac.save((err,resp)=>{
            if(err){
                console.log(err)
                res.json({"message": "error"})
            }
            else res.json({"message": "ok"})
        })
    }
    dohvatiNarucioca=(req:express.Request,res:express.Response)=>{
        let vlasnik=req.query.param
        NarucilacModel.find({'vlasnik':vlasnik},(err,narucioci)=>{
            if(err) console.log(err)
            else{
                res.json(narucioci)
            }
        })
    }
}