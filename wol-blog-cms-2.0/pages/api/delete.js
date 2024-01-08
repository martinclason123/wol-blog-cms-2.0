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

apiRoute.delete((req, res) => {
  const fileName = req.query.imageName;
  const filePath = path.join(process.cwd(), "public", "gallery", fileName);

  fs.unlink(filePath, (err) => {
    if (err) {
      res.status(404).json({ error: "File not found" });
      return;
    }
    res.status(200).json({ message: "File deleted successfully" });
  });
});

export default apiRoute;
