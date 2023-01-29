// const CustomerModel = require("./customerModel");

// updateCurrentCustomer = async (req, res) => {
//   const { currentCustomerID } = req.params;
//   const { name, age } = req.body;
//   try {
//     const customer = await CustomerModel.findOne({ _id: currentCustomerID });
//     if (!customer) {
//       const newCustomer = await new CustomerModel(
//         { _id: currentCustomerID },
//         { name: name },
//         { age: age }
//       );
//       await newCustomer.save();
//     }
//     const UpdatedCustomer = await CustomerModel.findOneAndUpdate(
//       { _id: currentCustomerID },
//       { name: name },
//       { age: age }
//     );
//     res.status(200).send(UpdatedCustomer);
//   } catch (err) {
//     res.status(400).send({ error: err.message });
//   }
// };

// Please comment out all your code when you are finished.
