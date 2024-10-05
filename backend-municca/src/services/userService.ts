import prisma from '../prisma';
import bcrypt from 'bcryptjs';
import { Role } from '@prisma/client';

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

// Função para criar um usuário com senha criptografada
const createUser = async (name: string, email: string, password: string, role: Role) => {
  // Gera o salt manualmente com 12 rounds
  const salt = await bcrypt.genSalt(12);

  // Criptografa a senha com o salt gerado
  const hashedPassword = await bcrypt.hash(password, salt);

  return prisma.user.create({
    data: { name, email, password: hashedPassword, role },
  });
};

// Função para atualizar um usuário, incluindo atualização da senha com criptografia
const updateUser = async (id: number, name: string, email: string, password: string, role: Role) => {
    // Gera o salt manualmente com 12 rounds
    const salt = await bcrypt.genSalt(12);
  
    // Criptografa a senha com o salt gerado
    const hashedPassword = await bcrypt.hash(password, salt);
  
    return prisma.user.update({
      where: { id },
      data: { 
        name, 
        email, 
        password: { set: hashedPassword },
        role,
      },
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
