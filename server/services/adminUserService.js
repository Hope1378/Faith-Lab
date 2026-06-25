import bcrypt from 'bcryptjs'
import AdminUser from '../models/AdminUser.js'
import { env } from '../config/environment.js'

export async function hashAdminPassword(password) {
  return bcrypt.hash(password, 10)
}

export async function compareAdminPassword(password, passwordHash) {
  return bcrypt.compare(password, passwordHash)
}

export async function ensureAdminUser() {
  const email = String(env.adminEmail || '').trim().toLowerCase()

  if (!email) {
    return null
  }

  const existing = await AdminUser.findOne({ email })
  if (existing) {
    return existing
  }

  const passwordHash = await hashAdminPassword(env.adminPassword)
  return AdminUser.create({
    name: env.adminName,
    email,
    passwordHash,
    role: 'admin',
    isActive: true
  })
}