/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';

export function InterestsStep({ formData, updateFields, onNext, loading }: any) {
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
      <h2 className="text-4xl font-bold mb-8">What are you most excited to learn about at this event?</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <textarea
          autoFocus
          value={formData?.attendeeLearning || ''}
          onChange={e => updateFields({ attendeeLearning: e.target.value })}
          className="w-full text-3xl bg-transparent border-b-2 border-gray-300 focus:border-[#FF9800] outline-none pb-2 min-h-[100px] resize-none"
          placeholder="Type your answer here... (optional)"
        />
        <motion.button
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="mt-8 px-8 py-4 bg-[#FF9800] text-black rounded-full font-medium"
        >
            {loading ?  <Loader />  :  "Complete Registration ⏎"}
        </motion.button>
      </form>
    </motion.div>
  );
}

export default InterestsStep;