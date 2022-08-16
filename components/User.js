import { useState } from "react";
import axios from "axios";

export default function User(params) {
  const [togglerOne, setTogglerOne] = useState(false);
  const [togglerTwo, setTogglerTwo] = useState(false);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [permit, setPermit] = useState("");
  return (
    <div>
      <h1>{params.name}</h1>
      {params.permit === "admin" ? (
        <button
          style={{ display: "block" }}
          onClick={() => setTogglerOne(!togglerOne)}
        >
          toggle adder
        </button>
      ) : (
        <p>Hello</p>
      )}
      {togglerOne ? (
        <div>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="text"
            placeholder="permition"
            onChange={(e) => setPermit(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPass(e.target.value)}
          />
          <button
            onClick={() => {
              axios
                .post("/api/add", { user, pass, permit })
                .then((res) => alert(res.data));
            }}
          >
            Add Account
          </button>
        </div>
      ) : null}
      <button onClick={() => setTogglerTwo(!togglerTwo)}>toggle Filler</button>
      {togglerTwo ? (
        <div>
          <table>
            <tr>
              <th>N°</th>
              <th>...</th>
              <th>...</th>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="..."
                  onChange={(e) => setPermit(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="..."
                  onChange={(e) => setPermit(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="..."
                  onChange={(e) => setPermit(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="..."
                  onChange={(e) => setPermit(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="..."
                  onChange={(e) => setPermit(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="..."
                  onChange={(e) => setPermit(e.target.value)}
                />
              </td>
            </tr>
          </table>
        </div>
      ) : null}
    </div>
  );
}
