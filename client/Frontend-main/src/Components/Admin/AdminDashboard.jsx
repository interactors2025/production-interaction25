import  { useEffect, useState } from "react";
import "./AdminDashboard.css"

const AdminDashboard  = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetch('https://nci25.moderncollegegk.in/api/v1/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.success && data.payload) {
                    setUsers(data.payload.users);
                } else {
                    setError(data.message || "Failed to fetch users.");
                }
            })
            .catch(error => setError(error.message));
    }, []);

    const openImageModal = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <h9>Users List</h9>
            {error ? (
                <p1>{error}</p1>
            ) : (
                <table>
                    <thead>
                        <tr>
                           <th>Name</th>
                            
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>College Name</th>
                            <th>Section</th>
                            <th>Events</th>
                            <th>Amount</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>Image</th>
                            <th>Created At</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.Id}>
                               
                            <td>{`${user.firstName} ${user.lastName}`}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                                <td>{user.collegeName}</td>
                                <td>{user.section}</td>
                                <td>{user.Events.join(", ")}</td>
                                <td>{user.amount}</td>
                                <td>{user.country}</td>
                                <td>{user.state}</td>
                                <td>
                                    <img
                                        src={user.Image}
                                        alt="User"
                                        onClick={() => openImageModal(user.Image)}
                                        style={{ cursor: "pointer" }}
                                    />
                                </td>
                                <td>{user.createdAt}</td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Modal for image display */}
            {selectedImage && (
                <div className="modal" onClick={closeImageModal}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Enlarged" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
