import express from 'express'
import { StoController } from '../controllers/sto.controller'

const stoRouter = express.Router();


stoRouter.route('/unesi').post(
    (req, res)=>new StoController().dodajSto(req, res)
)
stoRouter.route('/dohvati').post(
    (req, res)=>new StoController().dohvatiStolove(req, res)
)
stoRouter.route('/promeni').post(
    (req, res)=>new StoController().promeniSto(req, res)
)






export default stoRouter;