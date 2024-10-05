import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';

interface CustomRequest extends Request {
  user?: string | JwtPayload;
}

export const requireRole = (role: string) => {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    if (!req.user || (req.user as JwtPayload).role !== role) {
      return res.status(403).json({ message: 'Acesso negado. Você não tem permissão para realizar esta ação.' });
    }
    next();
  };
};