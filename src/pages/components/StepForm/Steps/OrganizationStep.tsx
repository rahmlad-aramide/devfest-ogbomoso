import { motion } from 'framer-motion';
import { StepProps } from '../types';

export function OrganizationStep({ formData, updateFields, onNext }: StepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      className="flex flex-col items-start justify-center min-h-[400px] w-full max-w-2xl mx-auto p-8"
    >
      <h2 className="text-4xl font-bold mb-8">What company or organization are you a part of?</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          autoFocus
          type="text"
          value={formData.attendeeOrg || ''}
          onChange={e => updateFields({ attendeeOrg: e.target.value })}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
          className="w-full text-3xl bg-transparent border-b-2 border-gray-300 focus:border-[#FF9800] outline-none pb-2"
          placeholder="Type your answer here... (optional)"
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
  );
}