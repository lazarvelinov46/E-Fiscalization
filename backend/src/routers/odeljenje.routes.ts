import express from 'express'
import { OdeljenjeController } from '../controllers/odeljenje.controller'

const odeljenjeRouter = express.Router();


odeljenjeRouter.route('/unesi').post(
    (req, res)=>new OdeljenjeController().dodajOdeljenje(req, res)
)

odeljenjeRouter.route('/dohvati').post(
    (req, res)=>new OdeljenjeController().dohvatiOdeljenja(req, res)
)



export default odeljenjeRouter;