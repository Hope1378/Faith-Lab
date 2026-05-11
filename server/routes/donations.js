import { Router } from 'express'
import { createDonation, getDonationReport, getDonations, confirmDonationPayment } from '../controllers/donationController.js'
import { requireRoles } from '../middleware/auth.js'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { donationLimiter } from '../middleware/rateLimiter.js'
import { validatePayload } from '../middleware/validation.js'
import { validateDonation } from '../../shared/validation.js'

const router = Router()

router.post('/', donationLimiter, validatePayload(validateDonation), asyncHandler(createDonation))
router.post('/:id/confirm', donationLimiter, asyncHandler(confirmDonationPayment))
router.get('/', requireRoles('admin', 'editor', 'viewer'), asyncHandler(getDonations))
router.get('/report', requireRoles('admin', 'editor', 'viewer'), asyncHandler(getDonationReport))

export default router
