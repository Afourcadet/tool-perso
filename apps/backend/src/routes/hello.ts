import { Router } from "express";

import { hello } from "../controllers/helloController";

const router = Router();

router.get("/", hello);

export default router;