import express from 'express';
import { getAllUsuarios, createUsuario, getUsuarioById, updateUsuario, deleteUsuario } from '../crud/usuario.js';
import { getAllReceitas, createReceita, getReceitaById, updateReceita, deleteReceita } from '../crud/receita.js';

const router = express.Router();

router.get('/usuarios', getAllUsuarios);
router.post('/usuario', createUsuario);
router.get('/usuario/:id', getUsuarioById);
router.put('/usuario/:id', updateUsuario);
router.delete('/usuario/:id', deleteUsuario);

router.get('/receitas', getAllReceitas);
router.post('/receita', createReceita);
router.get('/receita/:id', getReceitaById);
router.put('/receita/:id', updateReceita);
router.delete('/receita/:id', deleteReceita);

export default router;
