/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Confetti from "react-confetti";
import { Trophy, Users, Share2 } from "lucide-react";
import { useState, useEffect } from "react";
import { EmailStep } from "./StepForm/Steps/EmailStep";
import { apiurl } from "../config";

export default function ReferralStats() {
  const [formData, setFormData] = useState({
    attendeeEmail: "",
  });
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function updateFields(fields: Partial<FormData>) {
    setFormData((prev) => ({ ...prev, ...fields }));
  }
  const shareCode = () => {
    if (navigator.share) {
      navigator.share({
        title: "Register for DevFest 2021 ",
        text: `Join DevFest 2021 using my referral code! - ${user?.code}`,
        url: "https://devfest.xyz/register?ref=dididi",
      });
    } else {
      //copy to clipboard
      navigator.clipboard.writeText("dididi");
    }
  };
  const getUser = () => {
    console.log(`Getting user with email: ${formData.attendeeEmail}`);
    setLoading(true);
    // Here you would typically send the form data to your backend
    console.log(formData);
    fetch(apiurl + "/participant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.attendeeEmail,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        if(!response.status){
            alert(response.message);
            return;
        }
        setUser(response);
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  return (
    <div className="min-h-screen bg-[#FFF5E1] py-24 relative overflow-hidden text-black">
      {!user ? (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Want to see your referral contest stats?
          </h1>
          <EmailStep
            key="attendeeEmail"
            {...{ formData, updateFields }}
            onNext={getUser}
            loading={loading}
          />
        </div>
      ) : (
        <>
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={750}
            recycle={true}
          />

          <div className="container mx-auto px-4 text-black">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-1 bg-[#FF9800] text-black rounded-full text-sm mb-4">
                  REFERRALS
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                 Hello {user.firstName}
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Your Referral Impact
                </h1>
                <p className="text-xl text-gray-600">
                  Track your influence and help grow the DevFest community
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Referral Count Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-3xl p-8 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-8">
                    <Users className="w-8 h-8 text-[#FF9800]" />
                    <Share2 className="w-6 h-6 text-gray-400 hidden" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Total Referrals</h2>
                  <div className="text-6xl font-bold text-[#FF9800] mb-4">
                    <CountUp end={user.refferals} duration={2.5} />
                  </div>
                  <p className="text-gray-600">
                    People registered using your referral
                  </p>
                </motion.div>

                {/* Position Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-3xl p-8 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-8">
                    <Trophy className="w-8 h-8 text-[#FF9800]" />
                    <div className="w-16 h-16 rounded-full bg-[#FFF5E1] flex items-center justify-center">
                      <span className="text-2xl font-bold">#{user.position}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Your Position</h2>
                  <div className="text-4xl font-bold mb-4">
                    Top {user.position} Referrer
                  </div>
                  <p className="text-gray-600">
                    Keep sharing to climb the leaderboard!
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-3xl p-8 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-8">
                    <Trophy className="w-8 h-8 text-[#FF9800]" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">
                    Your Refferal Code
                  </h2>
                  <div className="text-4xl font-bold mb-4">{user.refferalCode}</div>
                  <p className="text-gray-600">
                    Keep sharing to climb the leaderboard!
                  </p>
                </motion.div>
              </div>

              {/* Share Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
                onClick={shareCode}
              >
                <button className="bg-[#FF9800] text-black px-8 py-4 rounded-full font-medium inline-flex items-center gap-2">
                  Share Your Referral Link
                  <Share2 className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#FF9800]/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#FF9800]/20 rounded-full blur-xl" />
    </div>
  );
}
