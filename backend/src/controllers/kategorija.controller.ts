import express from 'express'
import KategorijaModel from '../models/kategorija'


export class KategorijaController{
    dohvatiSve=(req:express.Request,res:express.Response)=>{
        let pib=req.body.pib
        KategorijaModel.find({'pib':pib},(err,kategorije)=>{
            if(err)console.log(err);
            else res.json(kategorije);
        })
    }
    dodajKategoriju=(req:express.Request,res:express.Response)=>{
        let kat=new KategorijaModel({
            pib:req.body.pib,
            naziv:req.body.naziv,
            potkategorije:req.body.potkategorije
        })
        kat.save((err,resp)=>{
            if(err){
                console.log(err)
                res.json({"message": "error"})
            }
            else res.json({"message": "ok"})
        })
    }
    dodajPotkategoriju=(req:express.Request,res:express.Response)=>{
        let pib=req.body.pib
        let naziv=req.body.naziv
        let potkategorije=req.body.potkategorije
        KategorijaModel.updateOne({'pib':pib,'naziv':naziv},{$set: {'potkategorije':potkategorije}},(err, resp)=>{
            if(err){
                res.json({'message':'error'})
                console.log(err)
            } 
            else {
                res.json({'message':'ok'})
            }
        })
    }
}