// pages/api/compress.js
import fs from "fs";
import path from "path";
import sharp from "sharp";
import ffmpeg from "fluent-ffmpeg";
import ora from "ora";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { fileName } = req.body;

    if (!fileName) {
      return res.status(400).json({ message: "No file name provided" });
    }

    const filePath = path.join("./public/gallery", fileName);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "File not found" });
    }

    // Construct paths for the output files
    const baseOutputPath = path.join(
      "./public/compressed",
      path.parse(fileName).name
    );
    const outputPaths = {
      avif: `${baseOutputPath}.avif`,
      webp: `${baseOutputPath}.webp`,
      compressedOriginal: `${baseOutputPath}${path.extname(fileName)}`,
    };

    // Convert and save in AVIF format
    await sharp(filePath)
      .avif({ quality: 80 }) // You can adjust quality as needed
      .toFile(outputPaths.avif);

    // Convert and save in WebP format
    await sharp(filePath)
      .webp({ quality: 80 }) // You can adjust quality as needed
      .toFile(outputPaths.webp);

    // Compress and save in original format (if JPEG or PNG)
    if (
      [".jpg", ".jpeg", ".png"].includes(path.extname(fileName).toLowerCase())
    ) {
      await sharp(filePath)
        .toFormat(path.extname(fileName).substring(1)) // get the format without dot
        .toFile(outputPaths.compressedOriginal);
    }

    res.status(200).json({ message: "File processed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
