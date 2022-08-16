import styles from "../styles/Home.module.css";
import axios from "axios";
import User from "../components/User";
import { useState } from "react";
export default function Home() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [permition, setPermition] = useState("");
  const [isloged, setIsloged] = useState(false);
  return (
    <>
      {!isloged ? (
        <div className={styles.container}>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPass(e.target.value)}
          />
          <button
            onClick={() => {
              axios.post("/api", { user, pass }).then((res) => {
                console.log(res.data.result);
                setIsloged(res.data.result.loged);
                setPermition(res.data.result.permit);
              });
            }}
          >
            Log in
          </button>
        </div>
      ) : (
        <User name={user} permit={permition} />
      )}
    </>
  );
}
