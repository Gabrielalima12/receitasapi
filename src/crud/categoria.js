import { prisma } from '../../prisma/database.js';

const getAllCategorias = async (req, res) => {
  try {
    const categorias = await prisma.categoria.findMany();
    res.json(categorias);
  } catch (error) {
    console.error('Erro ao buscar todas as categorias:', error);
    res.status(500).json({ error: 'Erro ao buscar todas as categorias' });
  }
};

const createCategoria = async (req, res) => {
  const { nome, descricao } = req.body;

  try {
    const novaCategoria = await prisma.categoria.create({
      data: {
        nome,
        descricao,
      },
    });

    res.status(201).json(novaCategoria);
  } catch (error) {
    console.error('Erro ao criar a categoria:', error);
    res.status(500).json({ error: 'Erro ao criar a categoria' });
  }
};

const getCategoriaById = async (req, res) => {
  const categoriaId = parseInt(req.params.id);

  try {
    const categoria = await prisma.categoria.findUnique({
      where: { id: categoriaId },
    });

    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ error: 'Categoria não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao buscar a categoria por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar a categoria por ID' });
  }
};

const updateCategoria = async (req, res) => {
  const categoriaId = parseInt(req.params.id);
  const { nome, descricao } = req.body;

  try {
    const categoriaAtualizada = await prisma.categoria.update({
      where: { id: categoriaId },
      data: { nome, descricao },
    });

    res.json(categoriaAtualizada);
  } catch (error) {
    console.error('Erro ao atualizar a categoria:', error);
    res.status(500).json({ error: 'Erro ao atualizar a categoria' });
  }
};

const deleteCategoria = async (req, res) => {
  const categoriaId = parseInt(req.params.id);

  try {
    const categoriaDeletada = await prisma.categoria.delete({
      where: { id: categoriaId },
    });

    res.json(categoriaDeletada);
  } catch (error) {
    console.error('Erro ao excluir a categoria:', error);
    res.status(500).json({ error: 'Erro ao excluir a categoria' });
  }
};

const getReceitasByCategoria = async (req, res) => {
  const categoriaNome = req.params.nome;

  try {
    const receitas = await prisma.receita.findMany({
      where: {
        categorias: {
          some: {
            nome: categoriaNome,
          },
        },
      },
      include: { categorias: true },
    });

    res.json(receitas);
  } catch (error) {
    console.error('Erro ao buscar receitas por categoria:', error);
    res.status(500).json({ error: 'Erro ao buscar receitas por categoria' });
  }
};

export {
  getAllCategorias,
  createCategoria,
  getCategoriaById,
  updateCategoria,
  deleteCategoria,
  getReceitasByCategoria
};
