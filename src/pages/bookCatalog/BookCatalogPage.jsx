import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function BookCatalogPage() {

  const [books, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");


    fetch("http://localhost:3000/api/books", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        console.log("Data", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Catalog</h1>
      <button className="bg-blue-400 text-white py-3 px-6 rounded-xl hover:bg-blue-600 text-xl font-bold mt-4">
        <Link to='/create-book-catalog'>Create</Link>
      </button>
      <div className="overflow-hidden rounded-lg border border-gray-800 mt-4">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-300 text-black-700">
            <tr className="border-b border-gray-800">
              <th className="py-2 px-4 text-left">Action</th>
              <th className="py-2 px-4 text-left">ISBN</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Authors</th>
              <th className="py-2 px-4 text-left">Publisher</th>
              <th className="py-2 px-4 text-left">Genre</th>
              <th className="py-2 px-4 text-left">Shelf Location</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-100 border-b border-gray-800">
                <td className="py-2 px-4">
                  <button className="bg-blue-400 text-white py-1 px-3 rounded hover:bg-blue-500">
                    View
                  </button>
                </td>
                <td className="py-2 px-4">{book.isbn}</td>
                <td className="py-2 px-4">{book.title}</td>
                <td className="py-2 px-4">{book.authors}</td>
                <td className="py-2 px-4">{book.publisher}</td>
                <td className="py-2 px-4">{book.genre}</td>
                <td className="py-2 px-4">{book.shelf_location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  
}
export default BookCatalogPage;