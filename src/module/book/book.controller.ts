import { NextFunction, Request, Response } from "express";
import { IBook } from "./book.interface";
import { Types } from "mongoose";
import { Book } from "./book.model";

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, price, genre, } = req.body;
        const book: IBook = {
            title,
            author: new Types.ObjectId("64f59bc2b59adaf3fb41deb6"),
            genre,
            image: new Types.ObjectId("64f59bc2b59adaf3fb41deb6"),
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
        const {id} = req.params
        const book= {
            title,
            genre,
            price,
        }

        const result = await Book.findByIdAndUpdate(id,book,{new: true})
        if(!result){
          return  res.status(404).send({
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
        const result = await Book.find()
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
        const result = await Book.findById(id)
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
        const result = await Book.findByIdAndDelete(id)
        if (!result) {
            return res.status(404).send({
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