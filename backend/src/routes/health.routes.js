import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ status: "ok", service: "nexa-ai-backend" });
});

export default router;
