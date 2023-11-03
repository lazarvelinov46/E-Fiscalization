import express from 'express'
import { NarucilacController } from '../controllers/narucilac.controller'

const narucilacRouter = express.Router();

narucilacRouter.route('/unesi').post(
    (req, res)=>new NarucilacController().dodajNaruicoca(req, res)
)
narucilacRouter.route('/dohvati').get(
    (req, res)=>new NarucilacController().dohvatiNarucioca(req, res)
)
export default narucilacRouter;