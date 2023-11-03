import express from 'express'
import { MagacinController } from '../controllers/magacin.controller'

const magacinRouter = express.Router();

magacinRouter.route('/login').post(
    (req, res)=>new MagacinController().dohvatiMagacine(req, res)
)

export default magacinRouter;