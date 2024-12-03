const express = require('express');
const router = express.Router();

const frontendRouter = require('./frontend/FrontendRoutes');

router.use(frontendRouter);

module.exports = router;