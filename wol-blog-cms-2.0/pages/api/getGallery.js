import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "GET") {
    const directoryPath = path.join(process.cwd(), "public", "gallery");

    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        res
          .status(500)
          .json({
            error: `Error reading the gallery directory: ${err.message}`,
          });
        return;
      }

      const fileNames = files.filter((file) => !file.startsWith(".")); // Filter out system files like .DS_Store
      res.status(200).json(fileNames);
    });
  } else {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
}
