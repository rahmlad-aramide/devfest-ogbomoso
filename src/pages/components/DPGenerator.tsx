import { motion } from "framer-motion";
import { Image as ImageIcon, Upload, PencilIcon } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

const dbBgColors = ["#4285f4", "#ea4335", "#34a853", "#f9ab00"];

function DPGeneratorComponent() {
  const [name, setName] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dpBackground, setDpBackground] = useState<number>(0);

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
      window.location.href = `/preview/?bg=${dpBackground}`;
    } else {
      alert("Please provide both name and photo");
    }
  };

  return (
    <section className="py-10 lg:py-16 bg-white min-h-screen w-full flex flex-col items-center justify-center rounded-3xl">
      <div className="w-full max-w-lg mx-auto rounded-2xl shadow-xl border border-gray-100 p-10 flex flex-col gap-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 text-center tracking-tight">
          DevFest DP Generator
        </h1>
        <p className="text-base text-gray-500 mb-6 text-center">
          Create a classy, modern display picture for DevFest Ogbomoso 2025.
          Simple, elegant, and ready to share!
        </p>
        <div className="flex flex-col gap-4">
          <label className="block text-sm font-medium mb-2 text-left text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF9800] bg-white text-gray-900"
          />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="relative aspect-square w-36 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-200">
            {uploading ? (
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : previewImage ? (
              <Image
                src={previewImage}
                alt="Profile Preview"
                className="object-cover rounded-lg"
                layout="fill"
              />
            ) : (
              <div
                className="flex flex-col items-center justify-center gap-2 cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <ImageIcon className="w-8 h-8 text-[#FF9800]" />
                <span className="text-xs text-gray-400">
                  Click to upload photo
                </span>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="block text-sm font-medium mb-2 text-gray-700">
            Choose a background
          </span>
          <div className="flex items-center justify-center gap-3">
            {dbBgColors.map((color, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setDpBackground(index)}
                className={`w-7 h-7 rounded-full border-2 ${
                  dpBackground === index
                    ? "border-[#FF9800]"
                    : "border-gray-200"
                } transition-all duration-200`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        <button
          disabled={!previewImage || !name}
          onClick={handleGenerateDP}
          className="disabled:bg-gray-200 w-full bg-[#FF9800] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#FF9800]/90 transition-colors font-semibold text-base shadow-md"
        >
          <PencilIcon className="w-5 h-5" /> Generate DP
        </button>
      </div>
    </section>
  );
}

export default DPGeneratorComponent;
