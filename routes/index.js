import express from 'express';
import { paginaIncio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarTertimonial } from '../controllers/testimonialController.js'

const router = express.Router();

router.get('/', paginaIncio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);


router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTertimonial);


export default router;