// import { handleAuth } from "@auth0/nextjs-auth0";

// export default handleAuth();

// pages/api/test.js
export default function handler(req, res) {
  res.status(200).json({ message: "API is working!" });
}
