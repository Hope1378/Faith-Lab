import Stripe from 'stripe'
import { env } from './environment.js'

export const stripe = env.stripeSecretKey ? new Stripe(env.stripeSecretKey) : null
