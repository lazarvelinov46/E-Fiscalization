import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import korisnikRouter from './routers/korisnik.routes';
import preduzeceRouter from './routers/preduzece.routes';
import magacinRouter from './routers/magacin.routes';
import narucilacRouter from './routers/narucilac.routes';
import artiklRouter from './routers/artikl.routes';
import kategorijaRouter from './routers/kategorija.routes';

import odeljenjeRouter from './routers/odeljenje.routes';
import stoRouter from './routers/sto.routes';
import racunRouter from './routers/racun.routes';
import izvestajRouter from './routers/izvestaj.routes';

const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/efiskalizacija')
const connection=mongoose.connection
connection.once('open',()=>{
    console.log('db connected')
})

const router=express.Router();
router.use('/korisnici',korisnikRouter)
router.use('/magacini',magacinRouter)
router.use('/preduzeca',preduzeceRouter)

router.use('/narucioci',narucilacRouter)
router.use('/artikli',artiklRouter)

router.use('/kategorije',kategorijaRouter)

router.use('/odeljenja',odeljenjeRouter)
router.use('/stolovi',stoRouter)
router.use('/racuni',racunRouter)

router.use('/izvestaj',izvestajRouter)

app.use('/',router)
app.listen(4000, () => console.log(`Express server running on port 4000`));