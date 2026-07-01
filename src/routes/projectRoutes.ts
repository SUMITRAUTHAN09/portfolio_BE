import express from "express";
import { createProject, deleteProject, getProjects, updateProject } from "../controllers/projectController";

const router =express.Router();
router.get("/",getProjects);
router.post("/",createProject);
router.put("/",updateProject);
router.delete("/:id",deleteProject);

export default router;