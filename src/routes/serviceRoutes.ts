import express from "express";
import { createService, deleteService, getService, updateService } from "../controllers/sericeConstroller";

const router = express.Router();

router.get("/", getService);
router.post("/",createService);
router.put("/", updateService);
router.delete("/:id", deleteService);

export default router;