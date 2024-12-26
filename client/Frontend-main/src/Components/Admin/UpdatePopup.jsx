/* eslint-disable react/prop-types */
import { useState } from "react";
import "./UpdatePopup.css";

const UpdatePopup = ({ user, onClose, onSubmit }) => {
  const [name, setName] = useState(user.name.firstname);
  const [phone, setPhone] = useState(user.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...user, name, phone });
  };

  return (
    <div className="update-popup">
      <div className="popup-content">
        <h2>Update User</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <div className="popup-actions">
            <button type="submit">Update</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePopup;
