import express from "express";
import { createTeckStack, deleteTechStack, getTeckStack, updateTechStack } from "../controllers/teckSrackController";

const router=express.Router();

router.get("/",getTeckStack);
router.post("/",createTeckStack);
router.put("/",updateTechStack);
router.delete("/:id",deleteTechStack);

export default router;