const express = require("express");
const activitiesRouter = require("./controllers/tracking_analytics");

const router = express.Router();

router.use("/api", activitiesRouter);

module.exports = router;
