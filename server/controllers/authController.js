import jwt from 'jsonwebtoken'
import AdminUser from '../models/AdminUser.js'
import { env } from '../config/environment.js'
import { compareAdminPassword } from '../services/adminUserService.js'

export async function loginAdmin(req, res) {
  return res.status(401).json({ message: 'Admin dashboard is disabled (database removed).' })
}

export async function getAdminSession(req, res) {
  return res.json({ user: req.user })
}