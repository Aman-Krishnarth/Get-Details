import React, { useState } from "react";
import axios from "axios";

const App = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    cardHolderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    amount: "",
    email: "",
    mobileNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "United States",
    zip: "",
  });

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle numeric input for CVV and Amount fields
  const handleNumericChange = (e) => {
    const { name, value } = e.target;
    // Ensure only numbers (and decimal for amount) are allowed
    if (/^\d*\.?\d*$/.test(value)) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Log the form data (you can handle the form submission here)
    console.log(formData);

    const result = await axios.post("http://localhost:8000/api/v1/details", {
      formData,
    });

    console.log(result);

    alert(result.data.message);

    // Here you can send the data to an API or another function to process the payment.
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Online Payment
        </h2>
        <p className="text-center text-green-700 mb-4">
          Make a payment using any of:
        </p>
        <div className="flex justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png"
            alt="Visa"
            className="h-10 mr-4"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png"
            alt="Mastercard"
            className="h-10"
          />
        </div>
        <p className="text-center text-gray-500 text-sm mb-6">
          You are entering a secure site. Verify your card details before
          submitting the payment.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Card Holder Name *</label>
            <input
              type="text"
              name="cardHolderName"
              value={formData.cardHolderName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Card Number *</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Month *</label>
              <select
                name="expiryMonth"
                value={formData.expiryMonth}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              >
                <option value="">Expiry Month</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Year *</label>
              <select
                name="expiryYear"
                value={formData.expiryYear}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              >
                <option value="">Expiry Year</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                {/* Add more years as needed */}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">CVV/CVC *</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleNumericChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Amount ($) *</label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleNumericChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>
          <div>
            <label className="block font-medium">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Mobile Number *</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Address Line 1 *</label>
            <input
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">
              Address Line 2 (Optional)
            </label>
            <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block font-medium">State *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                readOnly
              />
            </div>
            <div>
              <label className="block font-medium">Zip *</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            Submit Payment
          </button>
        </form>
        <p className="text-xs text-red-500 mt-4 text-center">
          This is a website of a collection agency. This is an attempt to
          collect a debt. Any information obtained will be used for that
          purpose.
        </p>
      </div>
    </div>
  );
};

export default App;
