import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  referralCode: string;
}

export function SuccessModal({ isOpen, onClose, referralCode }: SuccessModalProps) {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          >
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="-translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-2xl p-6 shadow-xl z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <Confetti
              width={windowSize.width}
              height={windowSize.height}
              numberOfPieces={600}
              recycle={true}
            />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6"
              >
                <Check className="w-8 h-8 text-green-600" />
              </motion.div>

              <h2 
                id="modal-title"
                className="text-2xl font-bold mb-4"
              >
                Registration Successful!
              </h2>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">Your Referral Code</p>
                <p className="text-xl font-mono font-bold text-[#FF9800]">{referralCode}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Link href="/dp">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-[#FF9800] text-black rounded-full font-medium"
                  >
                    Generate DP
                  </motion.button>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="w-full px-6 py-3 border border-gray-200 rounded-full font-medium"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SuccessModal;