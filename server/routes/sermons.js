import { Router } from 'express'
import { createSermon, deleteSermon, getSermonBySlug, getSermonDashboard, getSermons, updateSermon } from '../controllers/sermonController.js'
import { requireRoles } from '../middleware/auth.js'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { validatePayload } from '../middleware/validation.js'
import { validateSermon } from '../../shared/validation.js'

const router = Router()

router.get('/', asyncHandler(getSermons))
router.get('/dashboard', requireRoles('admin', 'editor', 'viewer'), asyncHandler(getSermonDashboard))
router.get('/:slug', asyncHandler(getSermonBySlug))
router.post('/', requireRoles('admin', 'editor'), validatePayload(validateSermon), asyncHandler(createSermon))
router.put('/:id', requireRoles('admin', 'editor'), validatePayload(validateSermon), asyncHandler(updateSermon))
router.delete('/:id', requireRoles('admin', 'editor'), asyncHandler(deleteSermon))

export default router
