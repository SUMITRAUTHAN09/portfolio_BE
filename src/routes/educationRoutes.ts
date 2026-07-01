import express from "express";
import { createEducation, deleteEducation, getEducation, updateEducation } from "../controllers/educationController";

const router =express.Router();

router.get("/",getEducation);
router.post("/",createEducation);
router.put("/",updateEducation);
router.delete("/:id",deleteEducation);

export default router;