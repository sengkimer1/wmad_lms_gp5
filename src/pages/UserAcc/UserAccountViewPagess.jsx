import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate, Link } from 'react-router-dom';

const token = localStorage.getItem("token");

const accountAPI = axios.create({
  baseURL: "https://wmad-library-backend-six.vercel.app/",
  headers: {
    'Authorization': `Bearer ${token}`,
  }
});

const UserAccountDetailsPage = () => {
  const [users, setUser] = useState({});
  const [userRole, setUserRole] = useState({});
  const { id } = useParams();
  const Nevigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await accountAPI.get(`/user_accounts/${id}`);
        setUser(response.data);
        setUserRole(response.data.user_role)
        // console.log(response.data.user_role.user_role_name)
      } catch (error) {
        console.error("Error fetching user account:", error);
      }
    };
    
     fetchUser();
  }, [id]);
  const handleBack = () => {};
  
  const handleUpdate = () => {};
  
  const handleDelete = async () => {
    if (window.confirm("Please confirm you want to delete this record.")) {
       Nevigate("/user-account");
      try {
        await accountAPI.delete(`/user_accounts/${id}`);
        // Handle successful deletion, maybe redirect or show a message
      } catch (error) {
        console.error("Error deleting user account:", error);
      }
    }
  };

  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-4">User Account Details</h1>
      <div className="mr-2 -mt-4 py-4 flex">
      <Link to={`/user-account`} className="mr-2 bg-gray-500 text-white py-2 px-5 rounded-lg hover:bg-gray-600 ">Back</Link>
      <Link to={`/form`} className="mr-2 bg-blue-500 text-white py-2 px-5 rounded-lg hover:bg-blue-600 ">Update</Link>
        <form method='post' action='destroy' onSubmit={handleDelete}>
        <button className="mr-2 bg-red-500 text-white py-2 px-5 rounded-lg hover:bg-red-600 " type='submit'>Delete</button>
        </form>
      
      
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-5 text-black font-semibold">Username</td>
              <td className="px-6 py-5">{users.username}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-5 text-black font-semibold">Email</td>
              <td className="px-6 py-5">{users.email}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-5 text-black font-semibold">Role</td>
              <td className="px-6 py-5">{userRole.user_role_name}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-5 text-black font-semibold">Is Active</td>
              <td className="px-6 py-5">{users.is_active ? 'Yes' : 'No'}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-5 text-black font-semibold">Is Activated</td>
              <td className="px-6 py-5">{users.is_activated ? 'Yes' : 'No'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAccountDetailsPage;
