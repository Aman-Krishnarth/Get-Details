const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema(
  {
    cardHolderName: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // Basic validation for card number length and format (Luhn algorithm can be implemented for full card validation)
          return /\d{16}/.test(value); // Check if the card number is exactly 16 digits
        },
        message: (props) => `${props.value} is not a valid card number!`,
      },
    },
    expiryMonth: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^(0[1-9]|1[0-2])$/.test(value); // Validate month between 01 and 12
        },
        message: (props) => `${props.value} is not a valid expiry month!`,
      },
    },
    expiryYear: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^(20\d{2})$/.test(value); // Ensure it's a valid year (from 2000 onward)
        },
        message: (props) => `${props.value} is not a valid expiry year!`,
      },
    },
    cvv: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^\d{3,4}$/.test(value); // CVV should be 3 or 4 digits
        },
        message: (props) => `${props.value} is not a valid CVV!`,
      },
    },
    amount: {
      type: Number,
      required: true,
      min: [0, "Amount must be a positive value!"], // Amount must be positive
    },
    email: {
      type: String,
      required: true,
      match: [/\S+@\S+\.\S+/, "Please provide a valid email address"], // Basic email validation
    },
    mobileNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // Simple validation for a mobile number (matches US format)
          return /^(?:\+1)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(value);
        },
        message: (props) => `${props.value} is not a valid mobile number!`,
      },
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
      default: "United States",
    },
    zip: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^\d{5}(-\d{4})?$/.test(value); // Validate US zip code format
        },
        message: (props) => `${props.value} is not a valid zip code!`,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Details", detailsSchema);
