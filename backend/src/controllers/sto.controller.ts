import express from 'express'
import StoModel from '../models/sto'

export class StoController{
    dodajSto=(req:express.Request,res:express.Response)=>{
        let sto=new StoModel({
            pib:req.body.pib,
            objekat:req.body.objekat,
            odeljenje:req.body.odeljenje,
            naziv:req.body.naziv,
            oblik:req.body.oblik,
            sirina:req.body.sirina,
            visina:req.body.visina,
            x:req.body.x,
            y:req.body.y
        })
        StoModel.findOne({'pib': sto.pib,'objekat':sto.objekat,'naziv':sto.naziv},(err,s)=>{
            if(err)console.log(err)
            else{
                if(s){
                    res.json({'message':'Vec postoji sto sa datim identifikatorom'})
                }else{
                    sto.save((err,resp)=>{
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
    dohvatiStolove=(req:express.Request,res:express.Response)=>{
        let pib=req.body.pib
        let objekat=req.body.objekat
        let odeljenje=req.body.odeljenje
        StoModel.find({'pib': pib,'odeljenje':odeljenje,'objekat':objekat}, (err, stolovi)=>{
            if(err) console.log(err);
            else{
                res.json(stolovi);
            }
        })
    }
    promeniSto=(req:express.Request,res:express.Response)=>{
        let odeljenje=req.body.odeljenje
        let objekat=req.body.objekat
        let naziv=req.body.naziv
        let x=req.body.x
        let y=req.body.y
        let msg='ok';
        StoModel.updateOne({'odeljenje':odeljenje,'objekat':objekat,'naziv': naziv},{'x':x}, (err, res)=>{
            if(err) msg='err'
            else{
            }
        })
        StoModel.updateOne({'odeljenje':odeljenje,'objekat':objekat,'naziv': naziv},{'y':y}, (err, res)=>{
            if(err) msg='err'
            else{
                
            }
        })
        res.json({'message':msg})
    }
}