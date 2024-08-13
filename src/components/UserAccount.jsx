// src/UserTable.js
// import UserTable from './UserTable';
// import React, { useEffect, useState } from 'react';

// function UserTable() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('/api/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h1>User Account</h1>
//       <button>Create</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Action</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Is Active</th>
//             <th>Is Activated</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={index}>
//               <td><button>View</button></td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.role}</td>
//               <td>{user.isActive}</td>
//               <td>{user.isActivated}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserTable;
