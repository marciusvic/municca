import React, { useState, useEffect } from 'react';
import { DocumentRow } from '../DocumentRow/DocumentRowComponent';
import { fetchDocuments, DocumentData } from '../../services/api';

export const ListDocuments: React.FC = () => {
  const [documentData, setDocumentData] = useState<DocumentData[]>([]);

  const getDocuments = async () => {
    try {
      const documents = await fetchDocuments();
      setDocumentData(documents);
    } catch (error) {
      console.error("Failed to fetch documents:", error);
    }
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <div className="p-4">
      <table className="min-w-full table-auto border-separate" style={{ borderSpacing: '0 10px' }}>
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left text-sm font-semibold">ID</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Name</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Status</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">User ID</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {documentData.map((document) => (
            <DocumentRow
              key={document.id}
              id={document.id}
              name={document.name}
              status={document.status}
              userId={document.userId}
              getDocuments={getDocuments}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
