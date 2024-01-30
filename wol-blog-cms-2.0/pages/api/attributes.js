// pages/api/attributes.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { imageName } = req.body;

    if (!imageName) {
      return res.status(400).json({ message: "No image name provided" });
    }

    const imagePath = path.resolve("./public/gallery", imageName);
    if (!fs.existsSync(imagePath)) {
      return res.status(404).json({ message: "Image not found" });
    }

    const image = sharp(imagePath);
    image
      .metadata()
      .then((metadata) => {
        console.log("metadata: ", metadata);
        res
          .status(200)
          .json({ width: metadata.width, height: metadata.height });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Error processing image" });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
