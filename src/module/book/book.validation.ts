import { Joi, validate } from "express-validation";

const validationBook = {
    body: Joi.object({
        title: Joi.string().required(),
        genre: Joi.string().required(),
        price: Joi.string().required(),
        image: Joi.string().required(),
    })
}

export const verifyBook = validate(validationBook,{},{})