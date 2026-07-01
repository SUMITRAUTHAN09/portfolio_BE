import express from "express";
import { createMessage, deleteMessage, getMessage, markRead } from "../controllers/messageController";

const router = express.Router();

router.get("/",getMessage);
router.post("/",createMessage);
router.put("/",markRead);
router.delete("/:id",deleteMessage);

export default router;  