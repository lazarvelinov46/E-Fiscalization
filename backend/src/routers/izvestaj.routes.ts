import express from 'express'
import { IzvestajController } from '../controllers/izvestaj.controller'

const izvestajRouter = express.Router();

izvestajRouter.route('/unesiizvestaj').post(
    (req, res)=>new IzvestajController().apdejtujIzvestaj(req, res)
)
izvestajRouter.route('/dohvatipib').get(
    (req, res)=>new IzvestajController().dohvatiPib(req, res)
)
izvestajRouter.route('/dohvatipreduzece').get(
    (req, res)=>new IzvestajController().dohvatiPred(req, res)
)
izvestajRouter.route('/dohvati').get(
    (req, res)=>new IzvestajController().dohvatiSve(req, res)
)

export default izvestajRouter;