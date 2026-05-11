import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart, FaArrowRight, FaArrowLeft, FaMobileAlt, FaWallet, FaCheckCircle, FaLock } from 'react-icons/fa'
import { SiCashapp, SiZelle } from 'react-icons/si'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useDonationContext } from '../../context/DonationContext'
import { validateDonation } from '../../utils/validators'
import { siteConfig } from '../../utils/constants'
import { confirmDonation } from '../../services/donationService'
import './DonationForm.css'

const stripePromise = loadStripe('pk_live_51TG43AH1trZyfojtaLhOh0Nw2FLPbBzTLZRRFTIa1adM4cOrzq5iiOWVY7oOJD7u8zH1tvArykLVgamYQjjJVg9g00V0fvALr2')

const initialState = { 
  name: '', 
  email: '', 
  phone: '', 
  amount: 75, 
  fund: 'General', 
  frequency: 'one-time', 
  anonymous: false, 
  message: '',
  paymentMethod: '' 
}

const steps = [
  { id: 1, title: 'Gift Details' },
  { id: 2, title: 'Payment Method' },
  { id: 3, title: 'Complete Gift' }
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
}

const methodVariants = {
  hover: { scale: 1.03, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' },
  tap: { scale: 0.98 }
}

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#1a1a1a',
      fontFamily: '"Outfit", sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': { color: '#aab7c4' },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
}

function DonationFormInner({ customSiteConfig }) {
  const activeConfig = customSiteConfig || siteConfig
  const [step, setStep] = useState(1)
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isProcessing, setIsProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const { donate, error: contextError } = useDonationContext()
  const stripe = useStripe()
  const elements = useElements()

  const handleNext = () => {
    if (step === 1) {
      const nextErrors = validateDonation(values)
      if (Object.keys(nextErrors).length) {
        setErrors(nextErrors)
        return
      }
      setErrors({})
    }
    setStep(prev => prev + 1)
  }

  const handleBack = () => setStep(prev => prev - 1)

  const handleMethodSelect = (method) => {
    setValues({ ...values, paymentMethod: method })
    setStep(3)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)
    try {
      // 1. Initiate donation and get Client Secret (if card) or just record intent
      const result = await donate(values)
      
      if (values.paymentMethod === 'card') {
        if (!stripe || !elements) return

        // 2. Confirm the payment on-site
        const cardElement = elements.getElement(CardElement)
        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(result.clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: values.name,
              email: values.email
            }
          }
        })

        if (stripeError) {
          throw new Error(stripeError.message)
        }

        if (paymentIntent.status === 'succeeded') {
          // 3. Notify backend to mark as paid
          await confirmDonation(result.donationId)
          setSuccess(true)
        }
      } else {
        // Manual gift success
        setSuccess(true)
      }
    } catch (err) {
      console.error(err)
      setErrors({ submit: err.message || 'Payment failed. Please try again.' })
    } finally {
      setIsProcessing(false)
    }
  }

  const getMethodIcon = (method) => {
    switch(method) {
      case 'card': return <FaWallet />
      case 'cashapp': return <SiCashapp />
      case 'zelle': return <SiZelle />
      case 'airtel_money': return <FaMobileAlt />
      default: return <FaHeart />
    }
  }

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div 
            key="step1"
            variants={containerVariants}
            initial="hidden" animate="visible" exit="exit"
            className="flex flex-col gap-5"
          >
            <div className="grid gap-4">
              <div className="input-group">
                <input 
                  value={values.name} 
                  onChange={(e) => setValues({ ...values, name: e.target.value })} 
                  placeholder="Full Name" 
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>

              <div className="input-group">
                <input 
                  value={values.email} 
                  onChange={(e) => setValues({ ...values, email: e.target.value })} 
                  placeholder="Email Address" 
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>

              <div className="input-group">
                <input 
                  value={values.phone} 
                  onChange={(e) => setValues({ ...values, phone: e.target.value })} 
                  placeholder="Phone Number" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="input-group">
                  <div className="amount-input-wrapper">
                    <span>$</span>
                    <input 
                      type="number" min="5" 
                      value={values.amount} 
                      onChange={(e) => setValues({ ...values, amount: Number(e.target.value) })} 
                    />
                  </div>
                </div>
                
                <select 
                  value={values.fund} 
                  onChange={(e) => setValues({ ...values, fund: e.target.value })}
                >
                  <option>General</option>
                  <option>Tithe</option>
                  <option>Offering</option>
                  <option>Missions</option>
                  <option>Building Fund</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-4 bg-midnight/5 rounded-2xl">
                <span className="text-sm font-medium text-midnight/70">Anonymous Gift?</span>
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={values.anonymous} 
                    onChange={(e) => setValues({ ...values, anonymous: e.target.checked })} 
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>

            <button onClick={handleNext} className="btn btn-primary">
              Choose Payment Method <FaArrowRight />
            </button>
          </motion.div>
        )
      case 2:
        return (
          <motion.div 
            key="step2"
            variants={containerVariants}
            initial="hidden" animate="visible" exit="exit"
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'card', name: 'Debit/Credit', icon: <FaWallet />, color: '#1a1a1a' },
                { id: 'cashapp', name: 'CashApp', icon: <SiCashapp />, color: '#00D632' },
                { id: 'zelle', name: 'Zelle', icon: <SiZelle />, color: '#6d1ed1' },
                { id: 'airtel_money', name: 'Airtel Money', icon: <FaMobileAlt />, color: '#ff0000' }
              ].map(method => (
                <motion.button
                  key={method.id}
                  variants={methodVariants}
                  whileHover="hover" whileTap="tap"
                  onClick={() => handleMethodSelect(method.id)}
                  className={`method-btn ${values.paymentMethod === method.id ? 'active' : ''}`}
                  style={{ '--method-color': method.color }}
                >
                  <span className="method-icon">{method.icon}</span>
                  <span className="method-name">{method.name}</span>
                </motion.button>
              ))}
            </div>

            <button onClick={handleBack} className="btn btn-ghost">
              <FaArrowLeft /> Edit Details
            </button>
          </motion.div>
        )
      case 3:
        const methodInfo = activeConfig.paymentMethods[values.paymentMethod === 'airtel_money' ? 'airtelMoney' : values.paymentMethod]
        return (
          <motion.div 
            key="step3"
            variants={containerVariants}
            initial="hidden" animate="visible" exit="exit"
            className="flex flex-col gap-6"
          >
            <div className="review-card">
              <div className="review-header">
                <span className="method-badge">
                  {getMethodIcon(values.paymentMethod)} {values.paymentMethod.replace('_', ' ')}
                </span>
                <span className="amount-badge">${values.amount}</span>
              </div>
              
              <div className="instructions-area">
                {values.paymentMethod === 'card' ? (
                  <div className="card-input-container">
                    <div className="elements-field">
                      <CardElement options={CARD_ELEMENT_OPTIONS} />
                    </div>
                    <p className="secure-tag"><FaLock /> Secure On-Site Payment</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="detail-row">
                      <span>Handle/Number:</span>
                      <strong className="text-lg">{methodInfo?.handle || methodInfo?.number}</strong>
                    </div>
                    <div className="p-3 bg-midnight/5 rounded-xl text-sm leading-relaxed italic text-midnight/80">
                      "{methodInfo?.instructions}"
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={handleSubmit} 
                disabled={isProcessing}
                className="btn btn-primary"
              >
                {isProcessing ? 'Processing Gift...' : values.paymentMethod === 'card' ? `Complete $${values.amount} Gift` : 'I Have Sent My Gift'} <FaCheckCircle />
              </button>
              <button onClick={() => setStep(2)} disabled={isProcessing} className="btn btn-ghost">
                Change Method
              </button>
            </div>
            
            {(contextError || errors.submit) && (
              <p className="error-text text-center mt-4 bg-red-50 p-3 rounded-xl border border-red-100">
                {contextError || errors.submit}
              </p>
            )}
          </motion.div>
        )
      default:
        return null
    }
  }

  if (success) {
    return (
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="success-screen"
      >
        <div className="celebration-icon">
          <FaCheckCircle />
        </div>
        <h2>Thank You, {values.anonymous ? 'Generous Soul' : values.name}!</h2>
        <p>Your gift to the {values.fund} fund has been secured. God bless your generosity!</p>
        <button onClick={() => { setStep(1); setSuccess(false); setValues(initialState); }} className="btn btn-primary mt-6">
          Make Another Gift
        </button>
      </motion.div>
    )
  }

  return (
    <div className="donation-card-modern">
      <div className="card-header">
        <div className="header-text">
          <p className="eyebrow">Sacred Giving</p>
          <h1 className="h2">{steps[step-1].title}</h1>
        </div>
        <div className="step-dots">
          {steps.map(s => (
            <div key={s.id} className={`dot ${step >= s.id ? 'active' : ''}`} />
          ))}
        </div>
      </div>

      <div className="card-body">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>

      <div className="card-footer">
        <p className="text-xs text-center text-midnight/40 max-w-[80%] mx-auto">
          All donations are secure. {activeConfig.churchName} is a registered NGO. Donation receipts are provided upon request.
        </p>
      </div>
    </div>
  )
}

export default function DonationForm({ customSiteConfig }) {
  return (
    <Elements stripe={stripePromise}>
      <DonationFormInner customSiteConfig={customSiteConfig} />
    </Elements>
  )
}
