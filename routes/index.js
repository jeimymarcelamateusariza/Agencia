import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { //req - lo que enviamos y res es lo que express nos responde 
    res.send('Inicio');
});

router.get('/nosotros', (req, res) => {    
    res.render('nosotros');
});

router.get('/viajes', (req, res) => {
    res.send('viajes');
});

router.get('/testimoniales', (req, res) => {
    res.send('testimoniales');
});

export default router;