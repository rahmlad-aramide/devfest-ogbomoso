import { motion } from "framer-motion";
import { Image as ImageIcon, Upload, PencilIcon } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

function DPGeneratorComponent() {
  const [name, setName] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateDP = () => {
    if (name && previewImage) {
      const dpData = {
        name,
        photo: previewImage,
      };
      localStorage.setItem("dp", JSON.stringify(dpData));
      window.location.href = "/preview";
    } else {
      alert("Please provide both name and photo");
    }
  };

  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#FFF5E1] rounded-full text-sm mb-8 font-bold">
            DP Maker
          </span>
          <h2 className="text-4xl font-bold mb-4">Create Your DevFest DP</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Show your excitement for DevFest 2024! Generate your custom profile
            picture with our DP maker.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto flex items-center justify-center">
          {/* Configuration Section */}
          <div className="space-y-6 w-full max-w-[500px]">
            <div className="bg-gray-100 p-6 rounded-xl">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                Your Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF9800]"
                  />
                </div>
              </div>
              <div className="mt-8 aspect-square bg-white rounded-2xl flex items-center justify-center relative overflow-hidden">
                {uploading ? (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : previewImage ? (
                  <Image
                    src={previewImage}
                    alt="Profile Preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="bg-white flex items-center justify-center flex-col gap-2" onClick={() => fileInputRef.current?.click()}>
                    Upload Photo
                    <ImageIcon className="w-12 h-12 text-black bg-white" />
                    <span className="text-xs text-gray-500">Click to upload photo</span>
                  </div>
                )}
              </div>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 bg-gray-100 text-black px-6 py-4 rounded-xl items-center justify-center gap-2 hidden hover:bg-gray-200 transition-colors"
                >
                  <Upload className="w-5 h-5" />
                  Upload Photo
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <button
                  disabled={!previewImage || !name}
                  onClick={handleGenerateDP}
                  className="disabled:bg-gray-200 w-full flex-1 bg-[#FF9800] text-black px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#FF9800]/90 transition-colors"
                >
                  Generate DP
                  <PencilIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DPGeneratorComponent;
