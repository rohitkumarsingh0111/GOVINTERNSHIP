import { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/admin/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/admin/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.error("Failed to delete user:", err);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  return (
    <div className="main-content">
      <h2>👥 Manage Users</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Skills</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.skills}</td>
              <td>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="admin-btn admin-btn-delete"
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
