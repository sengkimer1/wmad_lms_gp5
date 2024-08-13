import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

function CreateMember() {
  const [firstname, setFirstName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    console.log("Submitting data:", {
      firstname,
      start_date: startDate,
      expiry_date: expiryDate,
      phone,
      address,
      email,
    });
    fetch(`http://localhost:3000/api/members/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        fullname: firstname,
        date_of_birth: "2024-08-08",
        address: address,
        phone_number: phone,
        email: email,
        start_date: startDate,
        expiry_date: expiryDate,
        is_active: true,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/member");
      })
      .catch((error) => {
        console.error("Error:", error.message || "Unknown error");
      });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">New Member</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
        <label className="text-xl font-bold">Firstname:</label>
        <input
          className="text-lg min-h-16 w-96 border rounded-lg"
          type="text"
          name="firstname"
          placeholder="Firstname"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label className="text-xl font-bold">Phone Number:</label>
        <input
          className="text-lg min-h-16 w-96 border rounded-lg"
          type="tel"
          name="phone_number"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label className="text-xl font-bold">Email:</label>
        <input
          className="text-lg min-h-16 w-96 border rounded-lg"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="text-xl font-bold">Address:</label>
        <input
          className="text-lg min-h-16 w-96 border rounded-lg"
          type="text"
          name="address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label className="text-xl font-bold">Start Date:</label>
        <input
          className="text-lg min-h-16 w-96 border rounded-lg"
          type="date"
          name="start_date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label className="text-xl font-bold">Expiry Date:</label>
        <input
          className="text-lg min-h-16 w-96 border rounded-lg"
          type="date"
          name="expiry_date"
          placeholder="Expiry Date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />

        <div className="gap-4 flex">
          <button
            type="button"
            className="bg-gray-400 text-white px-8 py-2 mb-4 rounded-lg"
            onClick={() => navigate("/member")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 mb-4 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateMember;
