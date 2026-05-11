import { Router } from 'express'
import { createEvent, deleteEvent, downloadEventInvite, getEventBySlug, getEventDashboard, getEvents, registerForEvent, updateEvent } from '../controllers/eventController.js'
import { requireRoles } from '../middleware/auth.js'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { validatePayload } from '../middleware/validation.js'
import { validateEvent, validateEventRegistration } from '../../shared/validation.js'

const router = Router()

router.get('/', asyncHandler(getEvents))
router.get('/dashboard', requireRoles('admin', 'editor', 'viewer'), asyncHandler(getEventDashboard))
router.get('/:slug/invite', asyncHandler(downloadEventInvite))
router.get('/:slug', asyncHandler(getEventBySlug))
router.post('/', requireRoles('admin', 'editor'), validatePayload(validateEvent), asyncHandler(createEvent))
router.put('/:id', requireRoles('admin', 'editor'), validatePayload(validateEvent), asyncHandler(updateEvent))
router.delete('/:id', requireRoles('admin', 'editor'), asyncHandler(deleteEvent))
router.post('/:slug/register', validatePayload(validateEventRegistration), asyncHandler(registerForEvent))

export default router
