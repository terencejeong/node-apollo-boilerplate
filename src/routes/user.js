import { Router } from "express";
import { userController } from "../controllers";

const user = Router();

user.route("/all").get(userController.getUsers);
user.route("/sign-up").post(userController.createUser);

export default user;
