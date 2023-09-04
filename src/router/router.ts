import { Router } from "express";
import userRouter from "../module/user/user.index";

const router = Router();

router.use('/user', userRouter)

export default router;