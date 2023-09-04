import { Router } from "express";
import { verifyBook, verifyBookReview, verifyBookUpdate } from "./book.validation";
import { createBook, createReview, deleteBook, getBookById, getBooks, updateBook } from "./book.controller";

const router = Router();

router.post('/create-book', verifyBook, createBook)
router.patch('/update-book/:id', verifyBookUpdate, updateBook)
router.get('/get-books', getBooks)
router.get('/get-single-book/:id', getBookById)
router.delete('/delete-book/:id', deleteBook)
router.post('/review-book/:id', verifyBookReview, createReview)


export default router;