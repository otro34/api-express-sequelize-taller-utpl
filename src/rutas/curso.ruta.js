import express from 'express';

import controller from '../controladores/curso.controller.js';

const router = express.Router();

router.get('/', controller.findAll);
router.post('/', controller.create);
router.get('/:id', controller.findOne);
router.put('/', controller.update);
router.delete('/:id', controller.remove);

export default router;