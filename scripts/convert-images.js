const sharp = require("sharp")
const fs = require("fs")
const path = require("path")

async function convertToWebP() {
  const publicDir = path.join(__dirname, "../public")
  const webpDir = path.join(__dirname, "../public/webp")

  // Create webp directory if it doesn't exist
  if (!fs.existsSync(webpDir)) {
    fs.mkdirSync(webpDir, { recursive: true })
  }

  console.log("🔄 Converting images to WebP format...")

  const files = fs.readdirSync(publicDir)
  const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file))

  const conversions = imageFiles.map(async (file) => {
    const inputPath = path.join(publicDir, file)
    const outputPath = path.join(
      webpDir,
      file.replace(/\.(jpg|jpeg|png)$/i, ".webp")
    )

    try {
      await sharp(inputPath)
        .webp({
          quality: 85,
          effort: 6, // Higher effort = better compression
        })
        .toFile(outputPath)

      console.log(`✅ Converted ${file} to WebP`)
      return true
    } catch (error) {
      console.error(`❌ Failed to convert ${file}:`, error)
      return false
    }
  })

  const results = await Promise.all(conversions)
  const successful = results.filter(Boolean).length

  console.log(
    `🎉 Successfully converted ${successful}/${imageFiles.length} images to WebP`
  )
}

// Convert to AVIF as well for even better compression
async function convertToAVIF() {
  const publicDir = path.join(__dirname, "../public")
  const avifDir = path.join(__dirname, "../public/avif")

  // Create avif directory if it doesn't exist
  if (!fs.existsSync(avifDir)) {
    fs.mkdirSync(avifDir, { recursive: true })
  }

  console.log("🔄 Converting images to AVIF format...")

  const files = fs.readdirSync(publicDir)
  const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file))

  const conversions = imageFiles.map(async (file) => {
    const inputPath = path.join(publicDir, file)
    const outputPath = path.join(
      avifDir,
      file.replace(/\.(jpg|jpeg|png)$/i, ".avif")
    )

    try {
      await sharp(inputPath)
        .avif({
          quality: 80,
          effort: 9, // Maximum effort for best compression
        })
        .toFile(outputPath)

      console.log(`✅ Converted ${file} to AVIF`)
      return true
    } catch (error) {
      console.error(`❌ Failed to convert ${file}:`, error)
      return false
    }
  })

  const results = await Promise.all(conversions)
  const successful = results.filter(Boolean).length

  console.log(
    `🎉 Successfully converted ${successful}/${imageFiles.length} images to AVIF`
  )
}

async function main() {
  await convertToWebP()
  await convertToAVIF()
}

main().catch(console.error)
