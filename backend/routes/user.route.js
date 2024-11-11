import { Router } from "express";
import { test } from "../controllers/user.controller.js";

const router = Router()

router.route("/test").post(test)

export default router