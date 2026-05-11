export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
}

export const staggerTight = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04
    }
  }
}

export const fadeScale = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: 'easeOut' } }
}

export const driftIn = {
  hidden: { opacity: 0, y: 32, rotate: 1.2 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2, ease: 'easeIn' } }
}
export const slideUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}
