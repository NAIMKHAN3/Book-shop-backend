import { Router } from "express";
import { verifyBook, verifyBookUpdate } from "./book.validation";
import { createBook, getBookById, getBooks, updateBook } from "./book.controller";

const router = Router();

router.post('/create-book', verifyBook, createBook)
router.post('/update-book/:id', verifyBookUpdate, updateBook)
router.get('/get-books', getBooks)
router.get('/get-single-book/:id', getBookById)
router.delete('/delete-book/:id', getBookById)


export default router;