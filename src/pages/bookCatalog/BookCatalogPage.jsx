import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BookCatalogPage() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const booksPerPage = 10;

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
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error", error);
        setLoading(false);
      });
  }, []);

  const currentBooks = books.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book Catalog</h1>
      <button className="bg-blue-500 text-white px-6 py-2 mb-4 rounded-lg">
        <Link to="/book-catalog/new">Create</Link>
      </button>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-hidden rounded-lg border border-gray-800 mt-4">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-300 text-black-700">
              <tr className="border-b border-gray-800">
                <th className="px-7 py-5 text-left">Action</th>
                <th className="px-7 py-5 text-left">ISBN</th>
                <th className="px-7 py-5 text-left">Title</th>
                <th className="px-7 py-5 text-left">Authors</th>
                <th className="px-7 py-5 text-left">Publisher</th>
                <th className="px-7 py-5 text-left">Genre</th>
                <th className="px-7 py-5 text-left">Shelf Location</th>
              </tr>
            </thead>
            <tbody>
              {currentBooks.map((book) => (
                <tr key={book.id} className="hover:bg-gray-100 border-b border-gray-800">
                  <td className="py-2 px-4">
                    <Link className="bg-blue-400 text-white py-1 px-3 rounded hover:bg-blue-500" to={`/book-catalog/${book.id}`}>
                      View
                    </Link>
                  </td>
                  <td className="px-7 py-5">{book.isbn}</td>
                  <td className="px-7 py-5">{book.title}</td>
                  <td className="px-7 py-5">{book.authors}</td>
                  <td className="px-7 py-5">{book.publisher}</td>
                  <td className="px-7 py-5">{book.genre}</td>
                  <td className="px-7 py-5">{book.shelf_location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex justify-end mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          &larr; Prev
        </button>
        <span className="px-4 py-2">{currentPage}</span>
        <button
          onClick={nextPage}
          disabled={currentPage * booksPerPage >= books.length}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default BookCatalogPage;
