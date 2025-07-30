import axios from "axios";
import React, { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://13.51.107.169/api/users");
      console.log(response.data);
      setUsers(response.data.usersList);
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };

  const handleUserDelete = async (id) => {
    await axios.delete(`http://13.51.107.169/api/users/delete/${id}`);
    fetchUsers();
  };

  return (
    <div className="users-page-container">
      <h1 className="heading">Users Page</h1>

      {users.map((user) => (
        <div className="listdiv">
          <li className="li">{user.name}</li>
          <button
            className="deletebtn"
            onClick={() => handleUserDelete(user.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
