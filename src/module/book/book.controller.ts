import { NextFunction, Request, Response } from "express";
import { IBook } from "./book.interface";
import { Types } from "mongoose";
import { Book } from "./book.model";

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, price, genre, image } = req.body;
        const book: IBook = {
            title,
            author: new Types.ObjectId("64f59bc2b59adaf3fb41deb6"),
            genre,
            image,
            price,
        }

        const result = await Book.create(book)
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book created success",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, price, genre, } = req.body;
        const { id } = req.params
        const book = {
            title,
            genre,
            price,
        }

        const result = await Book.findByIdAndUpdate(id, book, { new: true }).populate([
            { path: 'author', select: '-password' },
            { path: 'image' }
        ])
        if (!result) {
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: "Book not found"
            })
        }
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book updated success",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Book.find().populate([
            { path: 'author', select: '-password' },
            { path: 'image' }
        ])
        res.status(200).send({
            success: true,
            statusCode: 200,
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getBookById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const result = await Book.findById(id).populate([
            { path: 'author', select: '-password' },
            { path: 'image' }
        ])
        if (!result) {
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: "Book not found"
            })
        }
        res.status(200).send({
            success: true,
            statusCode: 200,
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const result = await Book.findByIdAndDelete(id).populate([
            { path: 'author', select: '-password' },
            { path: 'image' }
        ])
        if (!result) {
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: "Book not found"
            })
        }
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book deleted success",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}

export const createReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { review } = req.body;
        const findBook = await Book.findById(id).populate([
            { path: 'author', select: '-password' },
            { path: 'image' }
        ]);
        if (findBook?.reviews) {
            findBook.reviews.push(review)
            await findBook.save();
            res.status(200).send({
                success: true,
                statusCode: 200,
                message: 'Book review success'
            })
        }
        else {
            res.status(404).send({
                success: false,
                statusCode: 404,
                message: 'Book not found'
            })
        }
    }
    catch (err) {
        next(err)
    }
}