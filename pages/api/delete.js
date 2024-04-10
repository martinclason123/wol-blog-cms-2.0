import nextConnect from "next-connect";
import fs from "fs";
import path from "path";

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.delete(async (req, res) => {
  const fileName = decodeURIComponent(req.query.imageName);
  const baseName = fileName.split(".").slice(0, -1).join(".");
  console.log("Base Name: ", baseName);

  const galleryFilePath = path.join(
    process.cwd(),
    "public",
    "gallery",
    fileName
  );
  const compressedDirPath = path.join(process.cwd(), "public", "compressed");

  // Delete file from gallery
  if (fs.existsSync(galleryFilePath)) {
    try {
      fs.unlinkSync(galleryFilePath);
      console.log(`Deleted ${galleryFilePath}`);
    } catch (err) {
      console.error(`Error deleting ${galleryFilePath}: ${err}`);
    }
  } else {
    console.log(`File not found in gallery: ${galleryFilePath}`);
  }

  // Delete matching files from compressed
  const files = fs.readdirSync(compressedDirPath);
  files.forEach((file) => {
    const fileBaseName = file.split(".").slice(0, -1).join(".");
    if (fileBaseName.toLowerCase() === baseName.toLowerCase()) {
      const filePath = path.join(compressedDirPath, file);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
          console.log(`Deleted ${filePath}`);
        } catch (err) {
          console.error(`Error deleting ${filePath}: ${err}`);
        }
      }
    }
  });

  res
    .status(200)
    .json({ message: "File and related compressed files deletion attempted" });
});

export default apiRoute;
