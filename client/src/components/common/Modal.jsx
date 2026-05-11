import { AnimatePresence, motion } from 'framer-motion'
import './Modal.css'

export default function Modal({ isOpen, title, children, onClose }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div className="fixed inset-0 z-[80] flex items-center justify-center bg-midnight/65 px-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} transition={{ duration: 0.28 }} onClick={(event) => event.stopPropagation()} className="modal-panel glass-panel max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-bold">{title}</h3>
              <button type="button" onClick={onClose} className="rounded-full border border-midnight/10 px-4 py-2 text-sm font-semibold">Close</button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
