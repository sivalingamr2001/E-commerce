import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";
import { toast } from "react-toastify";

export default function UserProfile() {
  const [user, setUser] = useState({
    username: "John Doe",
    email: "johndoe@gmail.com",
    phone: "9876543210",
    address: "92, Elm Street, Springfield, IL, 62701",
  });
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [orders, setOrders] = useState([]);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Fetch user and order data from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    if (storedUser) setUser(storedUser);
    setOrders(storedOrders);
  }, []);

  // Edit Mode Handlers
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser({ ...user });
  };

  const handleSave = () => {
    setUser({ ...editedUser });
    localStorage.setItem("currentUser", JSON.stringify(editedUser));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const clearAllLocalStorage = () => {
    localStorage.clear();
    toast("Account Has Been Deleted.");
  };

  const handleChangePassword = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUserEmail = localStorage.getItem("loggedInUser"); // Assuming the email of the logged-in user is stored in localStorage
    const user = storedUsers.find((user) => user.email === loggedInUserEmail);

    if (!user) {
      setMessage("User not found!");
      return;
    }

    if (user.password !== oldPassword) {
      setMessage("Old password is incorrect.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setMessage("New passwords do not match.");
      return;
    }

    // Update password
    user.password = newPassword;
    const updatedUsers = storedUsers.map((u) =>
      u.email === loggedInUserEmail ? user : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setMessage("Password updated successfully!");
  };

  return (
    <div className="user-profile">
      <header className="profile-header">
        <h1>My Account</h1>
        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
      </header>
      <div className="profile-content">
        <aside className="profile-sidebar">
          <nav>
            <ul>
              <li>
                <a href="#personal-info" className="active">
                  Personal Information
                </a>
              </li>
              <li>
                <a href="#order-history">Order History</a>
              </li>
              <li>
                <a href="#account-settings">Account Settings</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="profile-main">
          <section id="personal-info" className="profile-section">
            <h2>Personal Information</h2>
            {isEditing ? (
              <div className="info-grid">
                <div className="info-item">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="username"
                    value={editedUser.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="info-item">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="info-item">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={editedUser.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="info-item">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={editedUser.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ) : (
              <div className="info-grid">
                <div className="info-item">
                  <label>Full Name</label>
                  <p>{user.username}</p>
                </div>
                <div className="info-item">
                  <label>Email</label>
                  <p>{user.email}</p>
                </div>
                <div className="info-item">
                  <label>Phone</label>
                  <p>{user.phone}</p>
                </div>
                <div className="info-item">
                  <label>Address</label>
                  <p>{user.address}</p>
                </div>
              </div>
            )}
            <div>
              {isEditing ? (
                <>
                  <button className="save-button" onClick={handleSave}>
                    Save Changes
                  </button>
                  <button className="cancel-button" onClick={handleCancel}>
                    Cancel
                  </button>
                </>
              ) : (
                <button className="edit-button" onClick={handleEdit}>
                  Edit Information
                </button>
              )}
            </div>
          </section>
          <section id="order-history" className="profile-section">
            <h2>Order History</h2>
            {orders.length === 0 ? (
              <p>You have no orders in your history.</p>
            ) : (
              <table className="order-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{new Date(order.date).toLocaleString()}</td>
                      <td>${order.total}</td>
                      <td>{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
          <section id="account-settings" className="profile-section">
            <h2>Account Settings</h2>
            <div className="settings-grid">
              <div className="settings-item">
                <h3>Change Password</h3>
                {!showChangePasswordForm ? (
                  <button
                    className="secondary-button"
                    onClick={() => setShowChangePasswordForm(true)}
                  >
                    Update Password
                  </button>
                ) : (
                  <div className="change-password-form">
                    <label>Old Password:</label>
                    <input
                      type="password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      placeholder="Enter old password"
                    />
                    <label>New Password:</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                    />
                    <label>Confirm New Password:</label>
                    <input
                      type="password"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      placeholder="Confirm new password"
                    />
                    <button
                      className="secondary-button"
                      onClick={handleChangePassword}
                    >
                      Save Password
                    </button>
                    <button
                      className="secondary-button cancel-button"
                      onClick={() => setShowChangePasswordForm(false)}
                    >
                      Cancel
                    </button>
                    {message && (
                      <p
                        className={`message ${message.includes("success") ? "success" : ""}`}
                      >
                        {message}
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className="settings-item">
                <h3>Notification Preferences</h3>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                  Email Notifications
                </label>
              </div>
              <div className="settings-item">
                <h3>Delete Account</h3>
                <button
                  onClick={clearAllLocalStorage}
                  className="danger-button"
                >
                  Delete My Account
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
