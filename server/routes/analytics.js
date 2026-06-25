import { Router } from 'express'
import { getAnalyticsOverview, trackAnalyticsEvent } from '../controllers/analyticsController.js'
import { requireRoles } from '../middleware/auth.js'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { validatePayload } from '../middleware/validation.js'
import { validateAnalyticsEvent } from '../../shared/validation.js'

const router = Router()

router.post('/events', validatePayload(validateAnalyticsEvent), asyncHandler(trackAnalyticsEvent))
router.get('/overview', requireRoles('admin', 'editor', 'viewer'), asyncHandler(getAnalyticsOverview))

export default router