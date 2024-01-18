import nextConnect from "next-connect";
import fs from "fs";
import path from "path";
import archiver from "archiver";

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.post((req, res) => {
  const fileNamesWithExtension = req.body.fileNames;
  const fileNames = fileNamesWithExtension.map((name) =>
    name.split(".").slice(0, -1).join(".")
  );

  const compressedDirPath = path.join(process.cwd(), "public", "compressed");

  fs.readdir(compressedDirPath, (err, files) => {
    if (err) {
      res.status(500).json({ error: "Error reading directory" });
      return;
    }

    const matchedFiles = files.filter((file) => {
      const baseName = file.split(".").slice(0, -1).join(".");
      return fileNames.includes(baseName);
    });

    if (matchedFiles.length === 0) {
      res.status(404).json({ error: "No matching files found" });
      return;
    }

    // Create a ZIP archive and pipe it to the response
    const archive = archiver("zip", { zlib: { level: 9 } }); // Compression level 9
    archive.on("error", (err) => {
      throw err;
    });

    // Set headers for a zip file download
    res.setHeader("Content-Type", "application/zip");
    res.setHeader("Content-Disposition", 'attachment; filename="download.zip"');

    archive.pipe(res);

    // Append files to the archive
    matchedFiles.forEach((file) => {
      const filePath = path.join(compressedDirPath, file);
      archive.append(fs.createReadStream(filePath), { name: file });
    });

    // Finalize the archive
    archive.finalize();
  });
});

export default apiRoute;
