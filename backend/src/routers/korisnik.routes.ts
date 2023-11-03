import express from 'express'
import { KorisnikController } from '../controllers/korisnik.controller'

const korisnikRouter = express.Router();

korisnikRouter.route('/login').post(
    (req, res)=>new KorisnikController().login(req, res)
)
korisnikRouter.route('/loginadmin').post(
    (req, res)=>new KorisnikController().loginAdmin(req, res)
)
korisnikRouter.route('/changepassword').post(
    (req, res)=>new KorisnikController().changepassword(req, res)
)
korisnikRouter.route('/dodajkupca').post(
    (req, res)=>new KorisnikController().dodajKupca(req, res)
)

export default korisnikRouter;