import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { //req - lo que enviamos y res es lo que express nos responde y next hace que vaya al siguiente middleware 
    res.render('inicio', {
        pagina: 'Inicio'
    });
});

router.get('/nosotros', (req, res) => {    
    
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
});

router.get('/viajes', (req, res) => {
    res.render('viajes', {
        pagina: 'Viajes'
    });
});

router.get('/testimoniales', (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
});

export default router;