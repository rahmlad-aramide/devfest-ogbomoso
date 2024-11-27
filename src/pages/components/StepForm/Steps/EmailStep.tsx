/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import { StepProps } from "../types";
import { useState } from "react";
import { Loader } from "lucide-react";

export function EmailStep({
  formData,
  updateFields,
  onNext,
  loading,
}: StepProps | any) {
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData?.attendeeEmail.trim()) {
      setError("Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData?.attendeeEmail)) {
      setError("Please enter a valid email address");
      return;
    }
    onNext();
  };

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      className="flex flex-col items-start justify-center min-h-[400px] w-full max-w-2xl mx-auto p-8"
    >
      <h2 className="text-4xl font-bold mb-8">What's your email address?</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          autoFocus
          type="email"
          value={formData?.attendeeEmail}
          onChange={(e) => {
            setError("");
            updateFields({ attendeeEmail: e.target.value });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && formData?.attendeeEmail.trim()) {
              handleSubmit(e);
            }
          }}
          className="w-full text-3xl bg-transparent border-b-2 border-gray-300 focus:border-[#FF9800] outline-none pb-2"
          placeholder="name@example.com"
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <motion.button
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="mt-8 px-8 py-4 bg-[#FF9800] text-black rounded-full font-medium"
        >
          {loading ? <Loader /> : "Press Enter or Click to continue ⏎"}
        </motion.button>
      </form>
    </motion.div>
  );
}

export default EmailStep;