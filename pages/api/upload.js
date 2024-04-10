import nextConnect from "next-connect";
import multer from "multer";
import path from "path";

// Configure storage options
const storage = multer.diskStorage({
  destination: "./public/gallery",
  filename: function (req, file, cb) {
    // Use the original file name and extension
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

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

apiRoute.use(upload.array("files"));

apiRoute.post((req, res) => {
  res.status(200).json({ data: "success" });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
