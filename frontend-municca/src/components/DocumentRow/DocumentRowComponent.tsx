import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '../../hooks/AuthContext';
import { deleteDocument } from '../../services/api';

interface DocumentProps {
  id: number;
  name: string;
  status: string;
  userId: number;
  getDocuments: () => void; // Torna obrigatório para atualização após exclusão
}

export const DocumentRow: React.FC<DocumentProps> = ({ id, name, status, userId, getDocuments }) => {
  const { user } = useAuth();
  const isAdmin = user.role === 'ADMIN';

  const handleDelete = async (id: number) => {
    try {
      await deleteDocument(id);
      getDocuments(); // Atualiza a lista após exclusão
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <tr className="border-b border-transparent bg-white">
      <td className="px-4 py-4">{id}</td>
      <td className="px-4 py-4">{name}</td>
      <td className="px-4 py-4">{status}</td>
      <td className="px-4 py-4">{userId}</td>
      <td className="px-4 py-4 flex space-x-2">
        <button className="text-blue-500 hover:text-blue-700">
          <EditIcon />
        </button>
        {isAdmin && (
          <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(id)}>
            <DeleteIcon />
          </button>
        )}
      </td>
    </tr>
  );
};
