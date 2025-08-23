import { motion } from 'framer-motion';
import { StepProps } from '../types';
import { useEffect, useState } from 'react';

export function RefferalCodeStep({ formData, updateFields, onNext }: StepProps) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    // this forces a rerender
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Access `window.location.search` safely
      const urlParams = new URLSearchParams(window.location.search)
      const code = urlParams.get("code")
      if (code) {
        updateFields({ refferedBy: code })
      }
    }
  }, [updateFields])

  if (!hydrated) {
    // this returns null on first render, so the client and server match
    return null;
  }

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      className="flex flex-col items-start justify-center min-h-[400px] w-full max-w-2xl mx-auto p-8"
    >
      <h2 className="text-4xl font-bold mb-8">If someone invited you, Enter their refferal code</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          autoFocus
          type="text"
          value={formData?.refferedBy || ""}
          onChange={(e) => updateFields({ refferedBy: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e)
            }
          }}
          className="w-full text-3xl bg-transparent border-b-2 border-gray-300 focus:border-[#FF9800] outline-none pb-2"
          placeholder="Refferal Code... (optional)"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="mt-8 px-8 py-4 bg-[#FF9800] text-black rounded-full font-medium"
        >
          Press Enter or Click to continue ⏎
        </motion.button>
      </form>
    </motion.div>
  )
}

export default RefferalCodeStep
