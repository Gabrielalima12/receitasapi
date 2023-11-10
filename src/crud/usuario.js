import { prisma } from "../../prisma/db.js";

const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();

    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao buscar todos os usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar todos os usuários' });
  }
};


const createUsuario = async (req, res) => {
  const { usuario, email, senha, confirmasenha } = req.body;

  try {
    const novoUsuario = await prisma.usuario.create({
      data: {
        usuario,
        email,
        senha,
        confirmasenha,
      },
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error('Erro ao criar o usuário:', error);
    res.status(500).json({ error: 'Erro ao criar o usuário' });
  }
};

const getUsuarioById = async (req, res) => {
  const usuarioId = parseInt(req.params.id);

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: usuarioId },
    });

    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar o usuário por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar o usuário por ID' });
  }
};

const updateUsuario = async (req, res) => {
  const usuarioId = parseInt(req.params.id);
  const { usuario, email, senha, confirmasenha } = req.body;

  try {
    const usuarioAtualizado = await prisma.usuario.update({
      where: { id: usuarioId },
      data: { usuario, email, senha, confirmasenha },
    });

    res.json(usuarioAtualizado);
  } catch (error) {
    console.error('Erro ao atualizar o usuário:', error);
    res.status(500).json({ error: 'Erro ao atualizar o usuário' });
  }
};

const deleteUsuario = async (req, res) => {
  const usuarioId = parseInt(req.params.id);

  try {
    const usuarioDeletado = await prisma.usuario.delete({
      where: { id: usuarioId },
    });

    res.json(usuarioDeletado);
  } catch (error) {
    console.error('Erro ao excluir o usuário:', error);
    res.status(500).json({ error: 'Erro ao excluir o usuário' });
  }
};

export { getAllUsuarios, createUsuario, getUsuarioById, updateUsuario, deleteUsuario };
