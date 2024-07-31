import React, { useState, useEffect } from 'react';
import { getMember } from '../../api/MemberApi'; 

const MembersPage = () => {
  const [members, setMembers] = useState([]);
 

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await getMember();
        setMembers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold pb-5">Members</h1>
      <button className="bg-blue-500 text-white px-6 py-2 mb-4 rounded-lg">Create</button>
      <table className="min-w-full bg-white border-2 border-slate-500">
        <thead>
          <tr className="bg-slate-100">
            <th className="px-6 py-5 border border-y-slate-500">Action</th>
            <th className="px-6 py-5 border border-y-slate-500">Member Code</th>
            <th className="px-6 py-5 border border-y-slate-500">Full Name</th>
            <th className="px-6 py-5 border border-y-slate-500">Phone</th>
            <th className="px-6 py-5 border border-y-slate-500">Address</th>
            <th className="px-6 py-5 border border-y-slate-500">Start Date</th>
            <th className="px-6 py-5 border border-y-slate-500">Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member,index) => (
            <tr key={index}>
              <td className="px-4 py-2 border border-y-slate-500">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">View</button>
              </td>
              <td className="px-7 py-5 border border-y-slate-500">{member.member_code}</td>
              <td className="px-7 py-5 border border-y-slate-500">{member.fullname}</td>
              <td className="px-7 py-5 border border-y-slate-500">{member.phone_number}</td>
              <td className="px-7 py-5 border border-y-slate-500">{member.address}</td>
              <td className="px-7 py-5 border border-y-slate-500">{member.start_date}</td>
              <td className="px-7 py-5 border border-y-slate-500">{member.expiry_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersPage;