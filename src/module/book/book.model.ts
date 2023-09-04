import { Schema, model } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    genre: {
        type: String,
        required: true
    },
    image: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "FileUpload"
    },
    price: {
        type: Number,
        required: true
    },
    publicationDate: {
        type: Date,
        required: true,
        default: new Date()
    },
},
{timestamps: true})

export const Book = model<IBook>('Book', bookSchema)