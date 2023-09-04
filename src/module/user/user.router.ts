import { Router } from "express";
import { createUser } from "./user.controller";
import { verifyUser } from "./user.validation";

const router = Router();

router.post('/register', verifyUser, createUser)

export default router;