import { Router } from 'express'
import { getSubscribers, subscribe } from '../controllers/newsletterController.js'
import { requireRoles } from '../middleware/auth.js'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { validatePayload } from '../middleware/validation.js'
import { validateNewsletter } from '../../shared/validation.js'

const router = Router()

router.get('/', requireRoles('admin', 'editor', 'viewer'), asyncHandler(getSubscribers))
router.post('/', validatePayload(validateNewsletter), asyncHandler(subscribe))

export default router
