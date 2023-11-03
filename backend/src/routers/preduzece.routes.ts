import express from 'express'
import { PreduzeceController } from '../controllers/preduzece.controller'

const preduzeceRouter=express.Router();

preduzeceRouter.route('/register').post(
    (req, res)=>new PreduzeceController().register(req, res)
)
preduzeceRouter.route('/aktiviraj').post(
    (req, res)=>new PreduzeceController().aktiviraj(req, res)
)
preduzeceRouter.route('/deaktiviraj').post(
    (req, res)=>new PreduzeceController().deaktiviraj(req, res)
)
preduzeceRouter.route('/dohvatipreduzeca').get(
    (req, res)=>new PreduzeceController().dohvatiPreduzeca(req, res)
)
preduzeceRouter.route('/dohvatipreduzece').post(
    (req, res)=>new PreduzeceController().dohvatiPreduzece(req, res)
)
preduzeceRouter.route('/dohvatipopib').post(
    (req, res)=>new PreduzeceController().dohvatiPoPib(req, res)
)
preduzeceRouter.route('/apdejtuj').post(
    (req, res)=>new PreduzeceController().apdejtuj(req, res)
)
preduzeceRouter.route('/zavrsiregistraciju').post(
    (req, res)=>new PreduzeceController().zavrsiRegistraciju(req, res)
)
preduzeceRouter.route('/pretrazipopib').post(
    (req, res)=>new PreduzeceController().pretraziPoPib(req, res)
)


export default preduzeceRouter