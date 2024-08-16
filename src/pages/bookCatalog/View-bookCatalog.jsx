import { Link } from "@radix-ui/themes";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";


function ViewBookCatalog() {
  const [books, setData] = useState([]);
  const {id} = useParams();
  const navigate =useNavigate();
  


  useEffect(() => {
    const token = localStorage.getItem("token");


     fetch(`https://wmad-library-backend-six.vercel.app/api/books/`+id, {
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

  const handleDelete = (id) => {
    const userConfirmed = window.confirm("Would you like to delete?");
    if (userConfirmed) {
      const token = localStorage.getItem("token");
      navigate("/book-catalog");

      fetch(`https://wmad-library-backend-six.vercel.app/api/books/` + id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .catch((err) => console.error(err));
    }
  };
  
  return (
    <div className="container mx-auto ">
      <h1 className="text-2xl font-bold  ">Book Catalog Information</h1>
      <div className="flex justify- mt-4 py-4">
      <Button 
        text="Back" 
        kind="bg-blue-500 hover:bg-blue-700" 
        onClick={() => navigate("/book-catalog")}
      />
       <Button 
        text="update" 
        kind="Button-blue" 
        onClick={() => navigate("/book-catalog")}
      />
      
        <Button 
        text="Delete" 
        kind="Button-red" 
        onClick={() =>handleDelete(books.id)}
      />
        
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-6 py-5 text-black font-semibold">ISBN</td>
                  <td className="px-6 py-5">{books.isbn}</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-6 py-5 text-black font-semibold">Title</td>
                  <td className="px-6 py-5">{books.title}</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-6 py-5 text-black font-semibold">Authors</td>
                  <td className="px-6 py-5">{books.authors}</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-6 py-5 text-black font-semibold">Publisher</td>
                  <td className="px-6 py-5">{books.publisher}</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-6 py-5 text-black font-semibold">Publication Year</td>
                  <td className="px-6 py-5">{books.publication_year}</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-6 py-5 text-black font-semibold">Edition</td>
                  <td className="px-6 py-5">{books.edition}</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-6 py-5 text-black font-semibold">Genre</td>
                  <td className="px-6 py-5">{books.genre}</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-6 py-5 text-black font-semibold">Language</td>
                  <td className="px-6 py-5">{books.language}</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-6 py-5 text-black font-semibold">Number of Pages</td>
                  <td className="px-6 py-5 text-blue-500">{books.number_of_pages}</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-6 py-5 text-black font-semibold">Shelf Location</td>
                  <td className="px-6 py-5">{books.shelf_location}</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-6 py-5 text-black font-semibold">Description</td>
                  <td className="px-6 py-5">{books.description}</td>
                </tr>
            
          </tbody>
        </table>
      </div>
    
    </div>
  );
}

export default ViewBookCatalog;
