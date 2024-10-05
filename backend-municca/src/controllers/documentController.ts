import { Request, Response } from 'express';
import documentService from '../services/documentService';

// Buscar todos os documentos
export const getAllDocuments = async (req: Request, res: Response) => {
  try {
    const documents = await documentService.getAllDocuments();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar documentos' });
  }
};

// Buscar documento por ID
export const getDocumentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const document = await documentService.getDocumentById(Number(id));
    if (!document) return res.status(404).json({ error: 'Documento não encontrado' });
    res.json(document);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar documento' });
  }
};

// Criar novo documento
export const createDocument = async (req: Request, res: Response) => {
  const { name, status, userId } = req.body;
  try {
    const document = await documentService.createDocument(name, status, userId);
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar documento' });
  }
};

// Atualizar documento
export const updateDocument = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, status } = req.body;
  try {
    const document = await documentService.updateDocument(Number(id), name, status);
    res.json(document);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar documento' });
  }
};

// Deletar documento
export const deleteDocument = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await documentService.deleteDocument(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar documento' });
  }
};
