import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET não está definido nas variáveis de ambiente.');
}

interface CustomRequest extends Request {
    user?: string | JwtPayload;
  }
  
  // Middleware para verificar o token JWT
  export const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
    }
  
    jwt.verify(token, JWT_SECRET, (err: jwt.VerifyErrors | null, decodedToken: string | JwtPayload | undefined) => {
      if (err) {
        return res.status(403).json({ message: 'Token inválido.' });
      }
  
      req.user = decodedToken;
      next();
    });
  };