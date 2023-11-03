import express from 'express'
import { ArtiklController } from '../controllers/artikl.controller'

const artiklRouter = express.Router();

artiklRouter.route('/unesi').post(
    (req, res)=>new ArtiklController().dodajArtikl(req, res)
)
artiklRouter.route('/izmeni').post(
    (req, res)=>new ArtiklController().izmeniArtikl(req, res)
)
artiklRouter.route('/dohvatisve').post(
    (req, res)=>new ArtiklController().dohvatiSve(req, res)
)
artiklRouter.route('/dohvatiponazivu').get(
    (req, res)=>new ArtiklController().pretragaNaziv(req, res)
)
artiklRouter.route('/dohvatipoproizvodjacu').get(
    (req, res)=>new ArtiklController().pretragaProizvodjac(req, res)
)
artiklRouter.route('/dohvaticelubazu').get(
    (req, res)=>new ArtiklController().dohvatiCeluBazu(req, res)
)
artiklRouter.route('/obrisi').post(
    (req, res)=>new ArtiklController().obrisiArtikl(req, res)
)
artiklRouter.route('/dodajkategoriju').post(
    (req, res)=>new ArtiklController().dodajKategoriju(req, res)
)
artiklRouter.route('/smanjimagacin').post(
    (req, res)=>new ArtiklController().smanjiMagacin(req, res)
)
artiklRouter.route('/smanjiobjekat').post(
    (req, res)=>new ArtiklController().smanjiObjekat(req, res)
)
export default artiklRouter;