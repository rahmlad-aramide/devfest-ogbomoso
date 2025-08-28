const imagemin = require("imagemin")
const imageminMozjpeg = require("imagemin-mozjpeg")
const imageminPngquant = require("imagemin-pngquant")
const imageminSvgo = require("imagemin-svgo")
const path = require("path")
const fs = require("fs")

async function optimizeImages() {
  const publicDir = path.join(__dirname, "../public")
  const outputDir = path.join(__dirname, "../public/optimized")

  // Create optimized directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  console.log("🎨 Starting image optimization...")

  try {
    // Optimize JPEG images
    const jpegFiles = await imagemin([`${publicDir}/*.{jpg,jpeg}`], {
      destination: outputDir,
      plugins: [
        imageminMozjpeg({
          quality: 85, // Adjust quality (0-100)
          progressive: true,
        }),
      ],
    })

    // Optimize PNG images
    const pngFiles = await imagemin([`${publicDir}/*.png`], {
      destination: outputDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8], // Adjust quality range
        }),
      ],
    })

    // Optimize SVG images
    const svgFiles = await imagemin([`${publicDir}/*.svg`], {
      destination: outputDir,
      plugins: [
        imageminSvgo({
          plugins: [
            {
              name: "removeViewBox",
              active: false,
            },
            {
              name: "addAttributesToSVGElement",
              params: {
                attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
              },
            },
          ],
        }),
      ],
    })

    console.log(`✅ Optimized ${jpegFiles.length} JPEG files`)
    console.log(`✅ Optimized ${pngFiles.length} PNG files`)
    console.log(`✅ Optimized ${svgFiles.length} SVG files`)
    console.log(`🎉 All images optimized and saved to ${outputDir}`)

    // Calculate size savings
    const originalSize = calculateDirectorySize(publicDir)
    const optimizedSize = calculateDirectorySize(outputDir)
    const savings = (
      ((originalSize - optimizedSize) / originalSize) *
      100
    ).toFixed(2)

    console.log(`💾 Size reduction: ${savings}%`)
  } catch (error) {
    console.error("❌ Error optimizing images:", error)
  }
}

function calculateDirectorySize(dirPath) {
  let totalSize = 0
  const files = fs.readdirSync(dirPath)

  files.forEach((file) => {
    const filePath = path.join(dirPath, file)
    const stat = fs.statSync(filePath)
    if (stat.isFile() && /\.(jpg|jpeg|png|svg)$/i.test(file)) {
      totalSize += stat.size
    }
  })

  return totalSize
}

optimizeImages()
