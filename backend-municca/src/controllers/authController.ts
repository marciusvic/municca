import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';

// Registrar novo usuário
export const register = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await registerUser(name, email, password, role);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
};

// Login de usuário
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const { token, user } = await loginUser(email, password);
    res.json({ token, user });
  } catch (error) {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
};