const router = require("express").Router();
const mongoose = require("mongoose");




const User = require("../models/User.model");

// // GET /api/users -  Retrieves all of the users
// router.get("/users", (req, res, next) => {
//   User.find()
//     // .populate('tasks')
//     .then((allUsers) => res.json(allUsers))
//     .catch((err) => res.json(err));
// });





 //POST /api/user  -  Creates a new user
// router.post("/user", (req, res, next) => {
//   const {
//     email,
//     password,
//     name,
//     isAdmin,
//     profilePic, 
//    supported, 
//    supporterFav,
//    contributed, 
//    nfts,
//   } = req.body;

//   User.create({
//     email,
//     password,
//     name,
//     isAdmin,
//     profilePic,
//     supported,
//     supporterFav,
//     contributed,
//     nfts,
//   })
//     .then((response) => res.json(response))
//     .catch((err) => res.json(err));
// });




// //  GET /api/receivers/:receiverId -  Retrieves a specific receiver by id
// router.get("/receivers/:receiverId", (req, res, next) => {
//   const { receiverId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(receiverId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   // Each Project document has `tasks` array holding `_id`s of Task documents
//   // We use .populate() method to get swap the `_id`s for the actual Task documents
//   Receiver.findById(receiverId)
//     //.populate('tasks')
//     .then((receiver) => res.status(200).json(receiver))
//     .catch((error) => res.json(error));
// });




// // PUT  /api/users/:userId  -  Updates a specific receiver by id
// router.put("/users/:userId", (req, res, next) => {
//   const { userId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   User.findByIdAndUpdate(userId, req.body, { new: true })
//     .then((updatedUser) => res.json(updatedUser))
//     .catch((error) => res.json(error));
// });




// // DELETE  /api/receivers/:receiverId  -  Deletes a specific receiver by id
// router.delete("/receivers/:receiverId", (req, res, next) => {
//   const { receiverId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(receiverId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Receiver.findByIdAndRemove(receiverId)
//     .then(() =>
//       res.json({
//         message: `Receiver with ${receiverId} is removed successfully.`,
//       })
//     )
//     .catch((error) => res.json(error));
// });

module.exports = router;
