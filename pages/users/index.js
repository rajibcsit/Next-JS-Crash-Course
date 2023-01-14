import { useState } from "react";

function Users() {
  const [users, setusers] = useState([]);
  const [user, setUser] = useState("");
  const loadAllData = () => {
    fetch("api/users")
      .then((res) => res.json())
      .then((data) => setusers(data));
  };
  const addUser = () => {
    fetch("api/users", {
      method: "POST",
      body: JSON.stringify({ users }),
      headers: { "Content-Type": "application/json" },
    });
    loadAllData();
  };

  return (
    <div>
      <h2>All users</h2>
      <h2></h2>
      <div>
        <input onChange={(e) => setUser(e.target.value)} type="text" />
        <button onClick={addUser}> Add user </button>
      </div>
      <button onClick={loadAllData}> Load users Data</button>
      {users.map((user) => {
        return (
          <div>
            <h3>
              {user.id} : {user.name}
            </h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Users;
