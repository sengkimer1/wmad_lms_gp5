import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const token = localStorage.getItem("token");
const accountAPI = axios.create({
  baseURL: "https://wmad-library-backend-six.vercel.app/",
  headers: {
    'Authorization': `Bearer ${token}`,
  }
});

const CreateUserAccountListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await accountAPI.get("/user_accounts");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user accounts:", error);
      }
    };

    fetchAccount();
  }, []);

  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>User Account</h1>
      <button className='bg-blue-500 text-white px-6 py-2 mb-4 rounded-lg'>
        <Link to="/user-account/new">Create</Link></button>
        <div className="overflow-hidden rounded-lg border border-gray-800 mt-4">
      <table className='min-w-full bg-white'>
        <thead className="bg-gray-300 text-black-700">
          <tr  className="border-b border-gray-800">
            <th className='px-7 py-5 text-left'>Action</th>
            <th className='px-7 py-5 text-left'>Username</th>
            <th className='px-7 py-5 text-left'>Email</th>
            <th className='px-7 py-5 text-left'>Role</th>
            <th className='px-7 py-5 text-left'>Is Active</th>
            <th className='px-7 py-5 text-left'>Is Activated</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className='hover:bg-gray-100 border-b border-gray-800'>
              <td className='py-2 px-4'>
                <Link className='bg-blue-400 text-white py-1 px-3 rounded hover:bg-blue-500' to={`/user-account/${user.id}`}>
                  view
                </Link>
              </td>
              <td className='px-7 py-5'>{user.username}</td>
              <td className='px-7 py-5'>{user.email}</td>
              <td className='px-7 py-5'>{user.user_role.user_role_name}</td>
              <td className='px-7 py-5'>{user.is_active ? 'Yes' : 'No'}</td>
              <td className='px-7 py-5'>{user.is_activated ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CreateUserAccountListPage;
