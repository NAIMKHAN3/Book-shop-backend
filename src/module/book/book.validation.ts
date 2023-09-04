import { Joi, validate } from "express-validation";

const validationBook = {
    body: Joi.object({
        title: Joi.string().required(),
        genre: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().required(),
    })
}

export const verifyBook = validate(validationBook,{},{})

const validationBookUpdate = {
    body: Joi.object({
        title: Joi.string().optional(),
        genre: Joi.string().optional(),
        price: Joi.number().optional(),
        image: Joi.string().optional(),
    })
}

export const verifyBookUpdate = validate(validationBookUpdate,{},{})