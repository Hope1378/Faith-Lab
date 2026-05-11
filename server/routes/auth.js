import { Router } from 'express'
import { getAdminSession, loginAdmin } from '../controllers/authController.js'
import { requireAuth } from '../middleware/auth.js'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { validatePayload } from '../middleware/validation.js'
import { validateAdminLogin } from '../../shared/validation.js'

const router = Router()

router.post('/login', validatePayload(validateAdminLogin), asyncHandler(loginAdmin))
router.get('/session', requireAuth, asyncHandler(getAdminSession))

export default router