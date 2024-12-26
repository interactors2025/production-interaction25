//import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import UpdatePopup from "./UpdatePopup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminDashboard.css"

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  /*const navigate = useNavigate();
  useEffect(() => {

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]); */


  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/users?id=${searchQuery}`
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error searching users:", error);
    }
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentUsers = users.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(users.length / recordsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setIsUpdatePopupOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://fakestoreapi.com/users/${id}`);
      alert("User deleted successfully");
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleMail = (id) => alert(`Mail sent to user with ID: ${id}`);

  const handleUpdateSubmit = async (updatedUser) => {
    try {
      await axios.put(
        `https://fakestoreapi.com/users/${updatedUser.id}`,
        updatedUser
      );
      alert("User updated successfully");
      setIsUpdatePopupOpen(false);
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };


  return (<>
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">Admin Dashboard</h1>

      <div className="d-flex justify-content-center mb-3">
        <button
          className="btn btn-success me-2"
          onClick=""
        >
          Open Registration Form
        </button>
        <button className="btn btn-danger" onClick="">
          Close Registration Form
        </button>
      </div>

      <div className="d-flex justify-content-center mb-4">
        <div className="input-group w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Search by ID or Mobile Number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn btn-primary text-white"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name.firstname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-warning"
                    onClick={() => handleUpdate(user)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => handleMail(user.id)}
                  >
                    Mail
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li
              key={page}
              className={`page-item ${page === currentPage ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {isUpdatePopupOpen && (
        <UpdatePopup
          user={selectedUser}
          onClose={() => setIsUpdatePopupOpen(false)}
          onSubmit={handleUpdateSubmit}
        />
      )}
    </div>
    </>
  );
};

export default AdminDashboard;
