import prisma from '../prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Prisma, User } from '@prisma/client';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET não está definido nas variáveis de ambiente.');
}

export const registerUser = async (
  name: string, 
  email: string, 
  password: string, 
  role: 'ADMIN' | 'USER'
): Promise<User> => {
  // Verifica se o usuário já existe
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error('Usuário já registrado.');
  }

  // Gera o salt manualmente com 12 rounds
  const salt = await bcrypt.genSalt(12);

  // Criptografa a senha com o salt gerado
  const hashedPassword = await bcrypt.hash(password, salt);

  // Cria o novo usuário com role
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
    } as Prisma.UserCreateInput,
  });

  return user;
};

// Tipagem da função de login de usuário
export const loginUser = async (
  email: string, 
  password: string
): Promise<{ token: string; user: User }> => {
  // Busca o usuário pelo e-mail
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('Credenciais inválidas.');
  }

  // Verifica se a senha está correta
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error('Credenciais inválidas.');
  }

  // Gera o token JWT
  const token = jwt.sign(
    { userId: user.id, email: user.email, role: user.role }, 
    JWT_SECRET as string,  // Garante que JWT_SECRET seja uma string
    { expiresIn: '1h' }
  );

  return { token, user };
};