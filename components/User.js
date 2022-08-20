import { useState } from "react";
import axios from "axios";

export default function User(params) {
  const [togglerOne, setTogglerOne] = useState(false);
  const [togglerTwo, setTogglerTwo] = useState(false);

  const [userData, setUserData] = useState([]);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [permit, setPermit] = useState("");
  return (
    <div>
      <h1>{params.name}</h1>
      {params.permit === "admin" ? (
        <>
          <button
            style={{ display: "block" }}
            onClick={() => setTogglerOne(!togglerOne)}
          >
            toggle adder
          </button>
          <button
            onClick={() => {
              console.log("get users");
              axios.get("/api/getUsers").then((res) => setUserData(res.data));
            }}
          >
            manage users
          </button>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>username</th>
                <th>password</th>
                <th>permit</th>
                <th>craetedAt</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((i, key) => (
                <tr key={key}>
                  <td>{i.id}</td>
                  <td>{i.username}</td>
                  <td>{i.password}</td>
                  <td>{i.permit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
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
          <table className="sjil">
            <thead>
              <tr>
                <th></th>
                <th>...</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
