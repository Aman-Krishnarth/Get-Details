const Details = require("../models/Details/details.js");

const createDetails = async (req, res) => {

    console.log("create mein hu");
    console.log(req.body);

  const {
    cardHolderName,
    cardNumber,
    expiryMonth,
    expiryYear,
    cvv,
    amount,
    email,
    mobileNumber,
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    zip,
  } = req.body.formData;

  // assuming we get all the details

  try {
    const newDetails = await Details.create({
      cardHolderName,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvv,
      amount,
      email,
      mobileNumber,
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      zip,
    });

    if (newDetails) {
      res.json({ message: "Details created successfully", status: true });
    } else {
      res.json({ message: "Please fill details carefully", status: false });
    }
  } catch (error) {
    console.log("error aaay hai brother")
    console.log(error)
    res.json({ message: "Please fill details carefully", status: false });
  }

};

const getDetails = async (req,res)=>{

  try {
    const details = await Details.find({});
    if(details){
      res.json({details,status:true, message: "Details found successfully"});
    }else{
      res.json({message:"No details found",status:false});
    }
  } catch (error) {
    console.log("error aaay hai brother")
    console.log(error)
    res.json({ message: "Something went wrong", status: false });
  }

}

module.exports = { createDetails , getDetails};

// const detailsSchema = new mongoose.Schema(, { timestamps: true });
