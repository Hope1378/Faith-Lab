import AdminUser from '../models/AdminUser.js'
import { hashAdminPassword } from '../services/adminUserService.js'

export async function getAdminUsers(req, res) {
  const users = await AdminUser.find().select('-passwordHash').sort({ createdAt: 1 })
  return res.json(users)
}

export async function createAdminUser(req, res) {
  const email = String(req.body.email || '').trim().toLowerCase()
  const existing = await AdminUser.findOne({ email })

  if (existing) {
    return res.status(409).json({ message: 'A user with that email already exists.' })
  }

  const user = await AdminUser.create({
    name: req.body.name,
    email,
    passwordHash: await hashAdminPassword(req.body.password),
    role: req.body.role,
    isActive: req.body.isActive !== false
  })

  return res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    isActive: user.isActive,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    lastLoginAt: user.lastLoginAt
  })
}