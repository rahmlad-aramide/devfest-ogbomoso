import { motion } from 'framer-motion';
import { Download, Image as ImageIcon, Wand2 } from 'lucide-react';
import { useState } from 'react';

function DPGenerator() {
  const [frame, setFrame] = useState(1);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = () => {
    setUploading(true);
    // Simulate upload delay
    setTimeout(() => setUploading(false), 1500);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary rounded-full text-sm mb-4">
            DP MAKER
          </span>
          <h2 className="text-4xl font-bold mb-4">Create Your DevFest DP</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Show your excitement for DevFest Ogbomoso 2024! Generate your custom profile picture
            with our DP maker.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {uploading ? (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <ImageIcon className="w-12 h-12 text-gray-400" />
              )}
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((frameNum) => (
                <button
                  key={frameNum}
                  onClick={() => setFrame(frameNum)}
                  className={`aspect-square rounded-xl border-2 ${
                    frame === frameNum ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <div className="w-full h-full bg-primary rounded-lg" />
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleImageUpload}
                className="flex-1 bg-gray-100 text-black px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
              >
                <ImageIcon className="w-5 h-5" />
                Upload Photo
              </button>
              <button className="flex-1 bg-black text-white px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                <Download className="w-5 h-5" />
                Download
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-xl">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Wand2 className="w-5 h-5" />
                Customization Options
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Frame Style</label>
                  <select className="w-full p-3 rounded-lg border border-gray-200">
                    <option>Classic Frame</option>
                    <option>Modern Frame</option>
                    <option>Minimal Frame</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Frame Color</label>
                  <div className="flex gap-2">
                    {['#000000', '#FF0000', '#00FF00', '#0000FF'].map((color) => (
                      <button
                        key={color}
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DPGenerator;