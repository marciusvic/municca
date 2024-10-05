import prisma from '../prisma';

// Definir os métodos CRUD para User

// Função para retornar todos os usuários
const getAllUsers = async () => {
  return prisma.user.findMany();
};

// Função para retornar um usuário por ID
const getUserById = async (id: number) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

// Função para criar um usuário
const createUser = async (name: string, email: string) => {
  return prisma.user.create({
    data: { name, email },
  });
};

// Função para atualizar um usuário
const updateUser = async (id: number, name: string, email: string) => {
  return prisma.user.update({
    where: { id },
    data: { name, email },
  });
};

// Função para deletar um usuário
const deleteUser = async (id: number) => {
  return prisma.user.delete({
    where: { id },
  });
};

// Exportar as funções
export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
