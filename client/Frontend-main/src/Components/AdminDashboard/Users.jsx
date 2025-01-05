import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // For image popup

  // Fetch users from the API
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://nci25.moderncollegegk.in/api/v1/users"
      );
      if (!response.ok) throw new Error("Failed to fetch users");

      const data = await response.json();
      if (data.success && data.payload && Array.isArray(data.payload.users)) {
        setUsers(data.payload.users); // Correctly access the users array
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl); // Set the image to display in the popup
    const modalElement = document.getElementById("imageModal");
    const bootstrapModal = new window.bootstrap.Modal(modalElement);
    bootstrapModal.show();
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Users</h1>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Events</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <img
                    src={user.Image}
                    alt={user.name}
                    className="img-thumbnail img-fluid"
                    style={{ width: "50px", cursor: "pointer" }}
                    onClick={() => handleImageClick(user.Image)}
                  />
                </td>
                <td>
                  {user.firstName} &nbsp; {user.lastName}
                </td>
                <td>
                  {user.Events &&
                  Array.isArray(user.Events) &&
                  user.Events.length > 0 ? (
                    user.Events.map((event, index) => (
                      <span key={index} className="badge bg-primary me-2">
                        {event}
                      </span>
                    ))
                  ) : (
                    <span>No Events</span>
                  )}
                </td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2">Edit</button>
                  <button className="btn btn-sm btn-danger me-2">Delete</button>
                  <button className="btn btn-sm btn-success">Send Email</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Image Modal */}
      <div
        className="modal fade"
        id="imageModal"
        tabIndex="-1"
        aria-labelledby="imageModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="imageModalLabel">
                Image Preview
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="img-fluid rounded"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
