import express from 'express';
import { paginaIncio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controllers/paginasController.js';

const router = express.Router();

router.get('/', paginaIncio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);


router.get('/testimoniales', paginaTestimoniales);

export default router;