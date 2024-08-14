import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewUserAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRoleId, setUserRole] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [isActivated, setIsActivated] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const active = isActive === "true";
    const activated = isActivated === "true";

    const data = {
      user_role_id: parseInt(userRoleId),
      email,
      username,
      password,
      is_activated: activated,
      is_active: active,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/user_accounts",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsername(res.data.username);

      alert("Data Posted Successfully");
      navigate("/user-account");

      console.log(res.data);
    } catch (error) {
      console.error("Error fetching user accounts:", error.response);
      alert("An error occurred while posting data. Please try again later.");
    }
  };

  return (
    <section>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-gray-700">
          New User Accounts
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-4/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-4/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-4/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Role ID
          </label>
          <input
            type="number"
            value={userRoleId}
            onChange={(e) => setUserRole(e.target.value)}
            className="mt-1 block w-4/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Role ID"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Is Active
          </label>
          <select
            value={isActive}
            onChange={(e) => setIsActive(e.target.value)}
            className="mt-1 block w-4/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            required
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Is Activated
          </label>
          <select
            value={isActivated}
            onChange={(e) => setIsActivated(e.target.value)}
            className="mt-1 block w-4/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            required
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-600 mr-3"
            // onClick={() => navigate('/user-account')}
          >
            Cancel
          </button>
          <button
            type="submit"
            // onClick={()=>navigate(`/user_accounts/${id}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewUserAccount;
