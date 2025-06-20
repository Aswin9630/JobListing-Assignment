import express from "express"
import { createJob, viewAllJob, viewJobById } from "../controllers/jobController.js";
const router = express.Router()

router.post("/createJob",createJob);
router.get("/view",viewAllJob);
router.get("/view/:id",viewJobById);

export default router;