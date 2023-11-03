import express from 'express'
import MagacinModel from '../models/magacin'

export class MagacinController{
    dohvatiMagacine=(req:express.Request,res:express.Response)=>{
        
        MagacinModel.find({},(err,magacini)=>{
            if(err)console.log(err);
            else res.json(magacini);
        })
    }
}