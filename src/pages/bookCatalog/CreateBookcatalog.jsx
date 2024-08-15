import React, { useState } from 'react';
import InputField from '../../components/CreatBook';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    isbn: '',
    publisher: '',
    publication_year: '',
    edition: '',
    genre: '',
    language: '',
    number_of_pages: '',
    cover_image_url: '',
    shelf_location: '',
    description: ''
  });

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericalFields = ['publication_year', 'number_of_pages'];
    const newValue = numericalFields.includes(name) ? parseInt(value, 10) || '' : value;

    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://wmad-library-backend-six.vercel.app/api/books', formData, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
      .then(res => {
        alert("Data Posted Successfully");
        navigate('/book-catalog');
      })
      .catch(err => {
        console.error(err);
        alert("Error Posting Data");
      });
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      authors: '',
      isbn: '',
      publisher: '',
      publication_year: '',
      edition: '',
      genre: '',
      language: '',
      number_of_pages: '',
      cover_image_url: '',
      shelf_location: '',
      description: ''
    });
    navigate('/book-catalog');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">New Book Catalog</h1>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <InputField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
            />
            <InputField
              label="Authors"
              name="authors"
              value={formData.authors}
              onChange={handleChange}
              placeholder="Authors"
            />
            <InputField
              label="ISBN"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              placeholder="ISBN"
            />
            <InputField
              label="Publisher"
              name="publisher"
              value={formData.publisher}
              onChange={handleChange}
              placeholder="Publisher"
            />
            <InputField
              label="Publication Year"
              name="publication_year"
              value={formData.publication_year}
              onChange={handleChange}
              placeholder="Publication Year"
            />
            <InputField
              label="Edition"
              name="edition"
              value={formData.edition}
              onChange={handleChange}
              placeholder="Edition"
            />
            <InputField
              label="Genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              placeholder="Genre"
            />
          </div>
          <div>
            <InputField
              label="Language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              placeholder="Language"
            />
            <InputField
              label="Number of Pages"
              name="number_of_pages"
              value={formData.number_of_pages}
              onChange={handleChange}
              placeholder="Number of Pages"
            />
            <InputField
              label="Cover Image URL"
              name="cover_image_url"
              value={formData.cover_image_url}
              onChange={handleChange}
              placeholder="Cover Image URL"
            />
            <InputField
              label="Shelf Location"
              name="shelf_location"
              value={formData.shelf_location}
              onChange={handleChange}
              placeholder="Shelf Location"
            />
            <div>
              <label className="block mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
                rows="4"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-6">
          <button
            type="button"
            onClick={handleCancel}
            className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
