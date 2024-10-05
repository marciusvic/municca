import { Router } from 'express';
import { getAllDocuments, getDocumentById, createDocument, updateDocument, deleteDocument } from '../controllers/documentController';

const router = Router();

router.get('/', getAllDocuments);
router.get('/:id', getDocumentById);
router.post('/', createDocument);
router.put('/:id', updateDocument);
router.delete('/:id', deleteDocument);

export default router;
