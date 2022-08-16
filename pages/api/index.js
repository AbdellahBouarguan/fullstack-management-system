import { pool } from "../../config/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const results = await pool.query(
      "SELECT username,password,permit from users"
    );
    let loged = false;
    let permit;
    results.forEach((e) => {
      if (req.body.user === e.username && req.body.pass === e.password) {
        loged = true;
        permit = e.permit;
      }
    });
    res.status(200).json({ result: { loged, permit } });
  }
}
