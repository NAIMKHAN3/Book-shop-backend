import { Router } from "express";
import { verifyWishlist } from "./wishlist.validation";
import { createWishlist, deleteWishlist } from "./wishlist.controller";
import { verifyJwt } from "../../middleware/verifyJwt";

const router =Router();

router.post('/create-wishlist',verifyJwt, verifyWishlist, createWishlist)
router.get('/get-wishlist',verifyJwt,  createWishlist)
router.delete('/delete-wishlist', verifyJwt, deleteWishlist)


export default router;