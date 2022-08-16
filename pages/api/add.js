import { pool } from "../../config/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { user, pass, permit } = req.body;
    await pool.query("INSERT INTO users SET ?", {
      username: user,
      password: pass,
      permit,
    });
    res.status(200).json({ reponse: "account created seccessfully" });
  }
}
