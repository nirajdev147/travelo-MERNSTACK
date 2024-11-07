// adminController.js

import Admin from '../models/Admin.js';

// Controller functions

// Create a new admin
export const createAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const admin = new Admin({ username, email, password });
    await admin.save();
    res.status(201).json({ success: true, data: admin });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all admins
export const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json({ success: true, data: admins });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get admin by ID
export const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ success: false, message: 'Admin not found' });
    }
    res.status(200).json({ success: true, data: admin });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update admin by ID
export const updateAdminById = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, { username, email, password }, { new: true });
    res.status(200).json({ success: true, data: updatedAdmin });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete admin by ID
export const deleteAdminById = async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
