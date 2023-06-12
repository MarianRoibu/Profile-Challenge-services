const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

const { postUser, getBySub, getRandomUsers, getById, updateBasic, deleteUser, getByName, updateUserImage, updatePassword  } = userController;

router
    .get("/sub", getBySub)
    .get("/random", getRandomUsers) 
    .get("/id/:userId", getById)
    .get("/name/:userName", getByName)
    .patch("/update/:userId", updateBasic)
    .patch("/password/:userId", updatePassword)
    .patch("/delete/:userId", deleteUser)
    .patch("/update/image/:userId", updateUserImage)
    .post("/create", postUser);

module.exports = router;