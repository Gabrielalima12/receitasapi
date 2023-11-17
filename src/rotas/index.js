import express from 'express';
import { getAllUsuarios, createUsuario, getUsuarioById, updateUsuario, deleteUsuario } from '../crud/usuario.js';
import { getAllReceitas, createReceita, getReceitaById, updateReceita, deleteReceita } from '../crud/receita.js';
import { getAllCategorias, createCategoria, getCategoriaById, updateCategoria, deleteCategoria, getReceitasByCategoria, } from '../crud/categoria.js'


const router = express.Router();

router.get('/categorias', getAllCategorias);
router.post('/categorias', createCategoria);
router.get('/categorias/:id', getCategoriaById);
router.put('/categorias/:id', updateCategoria);
router.delete('/categorias/:id', deleteCategoria);
router.get('/categorias/:nome/receitas', getReceitasByCategoria);

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
