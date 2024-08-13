import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const URL = `http://localhost:3000/api/book_issues`;
const token = localStorage.getItem("token");


function BookIssueTable() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setBooks(result);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mb-4">Book Issue</h1>
      
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mb-4">
        Create
      </button>
      <div className="overflow-hidden rounded-xl border border-gray-500">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className=" ">Action</th>
              <th className="px-6 py-3 border-b border-black text-left">ISBN</th>
              <th className="px-6 py-3 border-b border-black text-left">Title</th>
              <th className="px-6 py-3 border-b border-black text-left">Member</th>
              <th className="px-6 py-3 border-b border-black text-left">Librarian</th>
              <th className="px-6 py-3 border-b border-black text-left">Issue Date</th>
              <th className="px-6 py-3 border-b border-black text-left">Due Date</th>
              <th className="px-6 py-3 border-b border-black text-left">Return Date</th>
              <th className="px-6 py-3 border-b border-black text-left">State</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, i) => (
              <tr key={i} className="even:bg-gray-100">
                <td className="px-6 py-4 border-b border-black">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                  <Link to={`/book-issue/${book.id}`}>View</Link>
                  </button>
                </td>
                <td className="px-6 py-3 border-b border-black">{book.book.isbn}</td>
                <td className="px-6 py-3 border-b border-black">{book.book.title}</td>
                <td className="px-6 py-3 border-b border-black">{book.member.fullname}</td>
                <td className="px-6 py-3 border-b border-black">{book.processed_by.username}</td>
                <td className="px-6 py-3 border-b border-black">{book.issue_date}</td>
                <td className="px-6 py-3 border-b border-black">{book.due_date}</td>
                <td className="px-6 py-3 border-b border-black">{book.return_date}</td>
                <td className="px-6 py-3 border-b border-black">{book.status_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
}
export default BookIssueTable;
