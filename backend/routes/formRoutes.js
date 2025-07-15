const express = require('express');
const { body } = require('express-validator');
const { handleFormSubmission } = require('../controllers/formController');

const router = express.Router();

router.post(
  '/',
  [
    body('name')
      .notEmpty().withMessage('Full name is required')
      .matches(/^[A-Za-z ]+$/).withMessage('Name must contain only letters and spaces')
      .isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),

    body('email')
      .isEmail().withMessage('Valid email is required'),

    body('phone')
      .notEmpty().withMessage('Phone number is required')
      .matches(/^[0-9]{10}$/).withMessage('Phone must be exactly 10 digits'),

    body('message')
      .optional()
      .isLength({ max: 2000 }).withMessage('Message must be less than 2000 characters'),

    body('smsConsent')
      .isBoolean().withMessage('SMS consent must be a boolean value')
      .equals('true').withMessage('You must agree to receive SMS messages to proceed')
  ],
  handleFormSubmission
);

module.exports = router;