import { Router } from "express";
import userRouter from "../module/user/user.index";
import bookRouter from "../module/book/book.index";

const router = Router();

router.use('/user', userRouter)
router.use('/book', bookRouter)

export default router;