import { pool } from "../../config/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const result = await pool.query("SELECT * from users");
    console.log(result);
    res.status(200).json(result);
  }
}
