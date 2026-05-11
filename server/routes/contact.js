import { Router } from 'express'
import { createContact, getContacts } from '../controllers/contactController.js'
import { requireRoles } from '../middleware/auth.js'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { validatePayload } from '../middleware/validation.js'
import { validateContact } from '../../shared/validation.js'

const router = Router()

router.get('/', requireRoles('admin', 'editor', 'viewer'), asyncHandler(getContacts))
router.post('/', validatePayload(validateContact), asyncHandler(createContact))

export default router
