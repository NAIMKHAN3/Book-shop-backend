import { NextFunction, Request, Response } from "express";
import { IBook } from "./book.interface";
import { Types } from "mongoose";

export const createBook = async (req:Request, res:Response, next: NextFunction) => {
    try{
const {title, price, genre, } = req.body;
const book:IBook = {
    title,
    author: new Types.ObjectId("64f59bc2b59adaf3fb41deb6"),
    genre,
    image: new Types.ObjectId("64f59bc2b59adaf3fb41deb6"),
    price,

}
    }
    catch(err){
        next(err)
    }
}