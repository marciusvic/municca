import prisma from '../prisma';
import { Status } from '@prisma/client';

// Métodos CRUD para Document

// Função para retornar todos os documentos
const getAllDocuments = async () => {
  return prisma.document.findMany();
};

// Função para retornar um documento por ID
const getDocumentById = async (id: number) => {
  return prisma.document.findUnique({
    where: { id },
  });
};

// Função para criar um documento
const createDocument = async (name: string, status: Status, userId: number) => {
    return prisma.document.create({
      data: { name, status, userId },
    });
  };

// Função para atualizar um documento
const updateDocument = async (id: number, name: string, status: Status) => {
    return prisma.document.update({
      where: { id },
      data: { name, status },
    });
  };
// Função para deletar um documento
const deleteDocument = async (id: number) => {
  return prisma.document.delete({
    where: { id },
  });
};

// Exportar funções
export default {
  getAllDocuments,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
};
