import { Router } from 'express'
import { createAdminUser, getAdminUsers } from '../controllers/adminUserController.js'
import { requireAdminAuth } from '../middleware/auth.js'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { validatePayload } from '../middleware/validation.js'
import { validateAdminUser } from '../../shared/validation.js'

const router = Router()

router.get('/', requireAdminAuth, asyncHandler(getAdminUsers))
router.post('/', requireAdminAuth, validatePayload(validateAdminUser), asyncHandler(createAdminUser))

export default router