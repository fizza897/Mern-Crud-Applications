import express from "express";
import { create, getAll, getOne, update,deleteUser } from "../Controller/userController.js";

const route =express.Router()
route.post("/create",create);
route.get("/getAll",getAll);
route.get("/getone/:id",getOne)
route.put("/update/:id",update)
route.delete("/delete/:id",deleteUser)

export default route;