const express = require('express');
const router = express.Router();

const TicketController = require('../../controllers/ticket-controller');
const {NotificationValidatorMiddleware} = require('../../middlewares/index');

router.post('/tickets',NotificationValidatorMiddleware.validateNotificationRequest,TicketController.create);

module.exports = router;