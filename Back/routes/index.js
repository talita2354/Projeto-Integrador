const express = require('express');
const router = express.Router();
// const paymentConditionRoutes = require('./paymentConditionRoutes');
// const reservationRoutes = require('./reservationRoutes');
const projectRoutes = require('./projectRoutes');
const developerRoutes = require('./developerRoutes');
const authRoutes = require('./auth');
const userRoutes = require('./userRoutes');

router.use('/api', authRoutes);
router.use('/project', projectRoutes);
router.use('/developer', developerRoutes);
// router.use('/payment-conditions', paymentConditionRoutes);
// router.use('/reservations', reservationRoutes);
router.use('/users', userRoutes);
module.exports = router;
