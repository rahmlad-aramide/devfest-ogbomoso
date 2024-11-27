/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { StepProps } from '../types';
import { useState } from 'react';

const experiences = [
  'No experience',
  'I am not a developer',
  '1 - 2 years',
  '3 - 5 years',
  '6 - 10 years',
  '> 10 years'
];

export function ExperienceStep({ formData, updateFields, onNext }: StepProps) {
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.attendeeExperience) {
      setError('Please select your experience level');
      return;
    }
    onNext();
  };

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      className="flex flex-col items-start justify-center min-h-[400px] w-full max-w-2xl mx-auto p-8"
    >
      <h2 className="text-4xl font-bold mb-8">What's your development experience?</h2>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <label className="flex items-center space-x-3 p-4 rounded-lg cursor-pointer hover:bg-gray-100">
              <input
                type="radio"
                name="experience"
                value={exp}
                checked={formData.attendeeExperience === exp}
                onChange={e => {
                  setError('');
                  updateFields({ attendeeExperience: e.target.value });
                }}
                className="form-radio h-5 w-5 text-[#FF9800]"
              />
              <span className="text-xl">{exp}</span>
            </label>
          </motion.div>
        ))}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="mt-8 px-8 py-4 bg-[#FF9800] text-black rounded-full font-medium"
        >
          Continue ⏎
        </motion.button>
      </form>
    </motion.div>
  );
}