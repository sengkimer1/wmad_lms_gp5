import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BookIssueInformation() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const URL = `http://localhost:3000/api/book_issues/${id}`;
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      try {
        const response = await fetch(URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    };

    fetchData();
  }, [id]);
  
  const renderBookIssueDetails = () => (
    <div className="overflow-hidden rounded-xl border border-gray-300 bg-white">
      <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-800">Book Issue Details</h2>
      <table className="min-w-full bg-white">
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="px-6 py-4 text-gray-700 font-medium">ISBN</td>
            <td className="px-6 py-4 text-gray-900">{data.book.isbn}</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-6 py-4 text-gray-700 font-medium">Title</td>
            <td className="px-6 py-4 text-gray-900">{data.book.title }</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-6 py-4 text-gray-700 font-medium">Issue Date</td>
            <td className="px-6 py-4 text-gray-900">{data.issue_date }</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-6 py-4 text-gray-700 font-medium">Return Date</td>
            <td className="px-6 py-4 text-gray-900">{data.return_date }</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-6 py-4 text-gray-700 font-medium">Librarian</td>
            <td className="px-6 py-4 text-gray-900">{data.book.librarian }</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-6 py-4 text-gray-700 font-medium">Status</td>
            <td className="px-6 py-4 text-gray-900">{data.status_id }</td>
          </tr>
        </tbody>
      </table>
    </div>
  );


  const renderMemberBorrowerDetails = () => (
    <div className="mt-8 overflow-hidden rounded-xl border border-gray-300 bg-white">
      <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-800">Member Borrower</h2>
      <table className="min-w-full bg-white">
  <tbody>
    <tr className="border-b border-gray-300">
      <td className="py-4 px-6 text-gray-700 font-medium">Member Code</td>
      <td className="py-4 px-6 text-gray-900">{data.member.member_code}</td>
    </tr>
    <tr className="border-b border-gray-300">
      <td className="py-4 px-6 text-gray-700 font-medium">Full Name</td>
      <td className="py-4 px-6 text-gray-900">{data.member.fullname}</td>
    </tr>
    <tr className="border-b border-gray-300">
      <td className="py-4 px-6 text-gray-700 font-medium">Email</td>
      <td className="py-4 px-6 text-gray-900">{data.member.email}</td>
    </tr>
    <tr className="border-b border-gray-300">
      <td className="py-4 px-6 text-gray-700 font-medium">Phone</td>
      <td className="py-4 px-6 text-gray-900">{data.member.phone_number}</td>
    </tr>
    <tr className="border-b border-gray-300">
      <td className="py-4 px-6 text-gray-700 font-medium">Status</td>
      <td className="py-4 px-6 text-gray-900">{data.member.is_active ? 'Active' : 'Inactive'}</td>
    </tr>
  </tbody>
</table>

    </div>
  );
  const handleDelete = (id) =>{
    const userComfirmed =window.confirm('You want to delete?')
    if(userComfirmed){
      const URL = 'http://localhost:3000/api/book_issues';
      const token = localStorage.getItem("token");
      navigate('/book-issue')

      const fetchData = async () => {
        try {
          const response = await fetch(URL, {
            method :DELETE,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        
        } catch (error) {
          console.error("Fetch error:", error.message);
        }
      };
  
      fetchData();
    }
  }
  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800">Book Issue Information</h1>

      <div className="mb-4">
        <button
       
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
        >
          Back
        </button>
        <button
       
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-4"
        >
          Update
        </button>
        <button
          onClick={()=>handleDelete(data.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 ml-4"
        >
          Delete
        </button>
      </div>

      <div>
    {data ? (
  
        <>{renderBookIssueDetails()} {renderMemberBorrowerDetails()}</>
        
      
    ) : (
      "Data not found"
    )}
  </div>
    </div>
  );
}

export default BookIssueInformation;
