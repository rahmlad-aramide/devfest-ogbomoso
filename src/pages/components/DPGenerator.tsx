import { motion } from "framer-motion"
import { Image as ImageIcon, Clock, Palette, Sparkles } from "lucide-react"

function DPGeneratorComponent() {
  return (
    <section className="py-24 bg-[#FFEDB8] text-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
        </motion.div>

        <div className="max-w-4xl mx-auto flex items-center justify-center">
          {/* Coming Soon Card */}
          <div className="w-full max-w-[500px]">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50/80 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl"
            >
              <div className="text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#4285f4] flex items-center justify-center">
                    <Palette className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                {/* Message */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">Feature Coming Soon</h3>
                  <p className="text-gray-600">
                    Our DP Generator is under development. You'll soon be able to create amazing profile pictures 
                    with custom backgrounds and DevFest branding.
                  </p>
                </div>
                
                {/* Status Indicators */}
                <div className="flex justify-center space-x-4">
                  {[
                    { label: "Design", color: "#EA4335", icon: <Sparkles className="w-4 h-4" /> },
                    { label: "Code", color: "#4285F4", icon: <Sparkles className="w-4 h-4" /> },
                    { label: "Test", color: "#34A853", icon: <Sparkles className="w-4 h-4" /> }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm border border-white/30 flex flex-col items-center justify-center shadow-md"
                    >
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center mb-1"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-700">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Progress Bar */}
                <div className="pt-4">
                  <div className="w-full bg-gray-200/50 rounded-full h-2.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-2.5 rounded-full bg-[#4285f4]"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Development in progress: 65% complete</p>
                </div>
                
                {/* Feature Highlights (replaced the button) */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-white/30"
                >
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#F9AB00]" />
                    Coming Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <span className="bg-[#34A853]/10 px-2 py-1 rounded">Custom Frames</span>
                    <span className="bg-[#4285F4]/10 px-2 py-1 rounded">Google Colors</span>
                    <span className="bg-[#EA4335]/10 px-2 py-1 rounded">Event Badges</span>
                    <span className="bg-[#F9AB00]/10 px-2 py-1 rounded">Easy Share</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DPGeneratorComponent