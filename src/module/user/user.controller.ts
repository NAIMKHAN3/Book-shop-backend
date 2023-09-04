import { NextFunction, Request, Response } from "express";
import { User } from "./user.model";
import bcrypt from 'bcrypt'
import { IUser } from "./user.interface";
import { createToken } from "../../utilits/token.utilitis";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;
        const isExistingUser = await User.findOne({ email })
        if (isExistingUser) {
            return res.status(400).send({
                success: true,
                statusCode: 400,
                message: "User Already Exist"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const user: IUser = {
            name,
            email,
            password: hashedPassword
        }
        const result = await User.create(user)
        const userInfo = {
            _id: result._id,
            name: result.name,
            email: result.email
        }
        const accessToken = createToken(userInfo, "ACCESS")
        const refreshToken = createToken(userInfo, "REFRESH")
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            path: '/'
        })
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'User Created Successfully',
            data: userInfo,
            accessToken
        })
    }
    catch (err) {
        next(err)
    }
}