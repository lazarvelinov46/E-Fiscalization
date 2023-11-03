import express from 'express'
import { RacunController } from '../controllers/racun.controller'

const racunRouter = express.Router();

racunRouter.route('/unesi').post(
    (req, res)=>new RacunController().dodajRacun(req, res)
)
racunRouter.route('/apdejt').post(
    (req, res)=>new RacunController().apdejtujRacun(req, res)
)
racunRouter.route('/dohvati').post(
    (req, res)=>new RacunController().dohvatiRacune(req, res)
)
racunRouter.route('/dohvatisve').get(
    (req, res)=>new RacunController().dohvatiSveRacune(req, res)
)
racunRouter.route('/dohvatilicna').post(
    (req, res)=>new RacunController().dohvatiLicna(req, res)
)
racunRouter.route('/zatvorigotovina').post(
    (req, res)=>new RacunController().zatvoriGotovina(req, res)
)
racunRouter.route('/zatvoricek').post(
    (req, res)=>new RacunController().zatvoriCek(req, res)
)
racunRouter.route('/zatvorikartica').post(
    (req, res)=>new RacunController().zatvoriKartica(req, res)
)
racunRouter.route('/zatvorivirman').post(
    (req, res)=>new RacunController().zatvoriVirman(req, res)
)

export default racunRouter;