import jwt from 'jsonwebtoken'
import { env } from '../config/environment.js'
import AdminUser from '../models/AdminUser.js'

function getBearerToken(header = '') {
  if (!header.startsWith('Bearer ')) {
    return ''
  }

  return header.slice(7).trim()
}

export async function requireAuth(req, res, next) {
  const token = getBearerToken(req.headers.authorization || '')

  if (!token) {
    return res.status(401).json({ message: 'Authentication required.' })
  }

  try {
    const payload = jwt.verify(token, env.jwtSecret)
    const user = await AdminUser.findById(payload.id).select('name email role isActive lastLoginAt')

    if (!user || !user.isActive) {
      return res.status(401).json({ message: 'Your session is no longer active.' })
    }

    req.user = {
      id: String(user._id),
      name: user.name,
      email: user.email,
      role: user.role,
      lastLoginAt: user.lastLoginAt
    }

    return next()
  } catch {
    return res.status(401).json({ message: 'Your session is invalid or has expired.' })
  }
}

export function requireAdminAuth(req, res, next) {
  return requireAuth(req, res, () => {
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access is required.' })
    }

    return next()
  })
}

export function requireRoles(...roles) {
  return (req, res, next) => requireAuth(req, res, () => {
    if (!roles.includes(req.user?.role)) {
      return res.status(403).json({ message: 'You do not have permission to access this resource.' })
    }

    return next()
  })
}