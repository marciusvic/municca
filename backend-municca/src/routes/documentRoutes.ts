import { Router } from 'express';
import { getAllDocuments, getDocumentById, createDocument, updateDocument, deleteDocument } from '../controllers/documentController';
import { authenticateToken } from '../middlewares/authMiddlewares';
import { requireRole } from '../middlewares/roleMiddleware';

const router = Router();

router.get('/', authenticateToken, getAllDocuments);
router.get('/:id', authenticateToken, getDocumentById);
router.post('/', authenticateToken, createDocument);
router.put('/:id', authenticateToken, updateDocument);
router.delete('/:id', authenticateToken, requireRole('ADMIN'), deleteDocument);

export default router;
