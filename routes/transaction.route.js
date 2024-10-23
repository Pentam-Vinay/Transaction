import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {  getTransaction, postTrans,getTransactionById, updateTrans } from "../controllers/transaction.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postTrans);
router.route("/get").get(isAuthenticated,getTransaction);

router.route("/get/:id").get(isAuthenticated,getTransactionById);

router.route("/update/:id").put(isAuthenticated,updateTrans);
export default router;
