import { prisma } from "../../prisma/db.js";

const getAllReceitas = async (req, res) => {
  try {
    const receitas = await prisma.receita.findMany(); 
    res.json(receitas);
  } catch (error) {
    console.error('Erro ao buscar todas as receitas:', error);
    res.status(500).json({ error: 'Erro ao buscar todas as receitas' });
  }
};


const createReceita = async (req, res) => {
  const { usuarioId, titulo, imagem, conteudo } = req.body;

  try {
    const novaReceita = await prisma.receita.create({
      data: {
        usuarioId,
        titulo,
        imagem,
        conteudo,
      },
    });

    res.status(201).json(novaReceita);
  } catch (error) {
    console.error('Erro ao criar a receita:', error);
    res.status(500).json({ error: 'Erro ao criar a receita' });
  }
};

const getReceitaById = async (req, res) => {
  const receitaId = parseInt(req.params.id);

  try {
    const receita = await prisma.receita.findUnique({
      where: { id: receitaId },
    });

    if (receita) {
      res.json(receita);
    } else {
      res.status(404).json({ error: 'Receita não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao buscar a receita por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar a receita por ID' });
  }
};

const updateReceita = async (req, res) => {
  const receitaId = parseInt(req.params.id);
  const { usuarioId, titulo, imagem, conteudo } = req.body;

  try {
    const receitaAtualizada = await prisma.receita.update({
      where: { id: receitaId },
      data: { usuarioId, titulo, imagem, conteudo },
    });

    res.json(receitaAtualizada);
  } catch (error) {
    console.error('Erro ao atualizar a receita:', error);
    res.status(500).json({ error: 'Erro ao atualizar a receita' });
  }
};

const deleteReceita = async (req, res) => {
  const receitaId = parseInt(req.params.id);

  try {
    const receitaDeletada = await prisma.receita.delete({
      where: { id: receitaId },
    });

    res.json(receitaDeletada);
  } catch (error) {
    console.error('Erro ao excluir a receita:', error);
    res.status(500).json({ error: 'Erro ao excluir a receita' });
  }
};

export { getAllReceitas, createReceita, getReceitaById, updateReceita, deleteReceita };
