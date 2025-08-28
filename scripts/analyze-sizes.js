const fs = require("fs")
const path = require("path")

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath)
    return stats.size
  } catch (error) {
    return 0
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

function analyzeImageSizes() {
  const publicDir = path.join(__dirname, "../public")
  const webpDir = path.join(publicDir, "webp")
  const avifDir = path.join(publicDir, "avif")

  console.log("📊 Image Size Analysis\n")
  console.log("=".repeat(80))

  const originalFiles = fs
    .readdirSync(publicDir)
    .filter((file) => /\.(jpg|jpeg|png)$/i.test(file))

  let totalOriginal = 0
  let totalWebP = 0
  let totalAVIF = 0

  originalFiles.forEach((file) => {
    const originalPath = path.join(publicDir, file)
    const webpPath = path.join(
      webpDir,
      file.replace(/\.(jpg|jpeg|png)$/i, ".webp")
    )
    const avifPath = path.join(
      avifDir,
      file.replace(/\.(jpg|jpeg|png)$/i, ".avif")
    )

    const originalSize = getFileSize(originalPath)
    const webpSize = getFileSize(webpPath)
    const avifSize = getFileSize(avifPath)

    totalOriginal += originalSize
    totalWebP += webpSize
    totalAVIF += avifSize

    const webpSavings = (
      ((originalSize - webpSize) / originalSize) *
      100
    ).toFixed(1)
    const avifSavings = (
      ((originalSize - avifSize) / originalSize) *
      100
    ).toFixed(1)

    console.log(`📸 ${file}`)
    console.log(`   Original: ${formatBytes(originalSize)}`)
    console.log(`   WebP:     ${formatBytes(webpSize)} (-${webpSavings}%)`)
    console.log(`   AVIF:     ${formatBytes(avifSize)} (-${avifSavings}%)`)
    console.log("")
  })

  console.log("=".repeat(80))
  console.log("📈 TOTAL SAVINGS:")
  console.log(`   Original Total: ${formatBytes(totalOriginal)}`)
  console.log(
    `   WebP Total:     ${formatBytes(totalWebP)} (-${(
      ((totalOriginal - totalWebP) / totalOriginal) *
      100
    ).toFixed(1)}%)`
  )
  console.log(
    `   AVIF Total:     ${formatBytes(totalAVIF)} (-${(
      ((totalOriginal - totalAVIF) / totalOriginal) *
      100
    ).toFixed(1)}%)`
  )
  console.log("=".repeat(80))

  console.log("\n💡 Recommendations:")
  console.log(
    "1. Use AVIF format for browsers that support it (Chrome 85+, Firefox 93+)"
  )
  console.log("2. Fallback to WebP for other modern browsers")
  console.log("3. Use original formats as final fallback")
  console.log(
    "4. Implement the picture element or use Next.js Image component for automatic format selection"
  )
}

analyzeImageSizes()
