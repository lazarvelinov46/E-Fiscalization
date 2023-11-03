import express from 'express'
import { KategorijaController } from '../controllers/kategorija.controller'

const kategorijaRouter = express.Router();

kategorijaRouter.route('/dohvatisve').post(
    (req, res)=>new KategorijaController().dohvatiSve(req, res)
)
kategorijaRouter.route('/dodaj').post(
    (req, res)=>new KategorijaController().dodajKategoriju(req, res)
)
kategorijaRouter.route('/dodajpotkategoriju').post(
    (req, res)=>new KategorijaController().dodajPotkategoriju(req, res)
)


export default kategorijaRouter;