// adminRoutes.js

import express from 'express';
import {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdminById,
  deleteAdminById
} from '../controllers/adminController.js';

const router = express.Router();

// Route to create a new admin
router.post('/admins', createAdmin);

// Route to get all admins
router.get('/admins', getAllAdmins);

// Route to get admin by ID
router.get('/admins/:id', getAdminById);

// Route to update admin by ID
router.put('/admins/:id', updateAdminById);

// Route to delete admin by ID
router.delete('/admins/:id', deleteAdminById);

export default router;
