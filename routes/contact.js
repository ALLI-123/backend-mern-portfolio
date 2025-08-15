// const express = require('express');
// const router = express.Router();
// const Message = require('./models/Message');

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

module.exports = router;



const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/contactController');
const { body } = require('express-validator');

// Contact form submission
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').notEmpty().withMessage('Message is required')
  ],
  sendMessage
);

// Admin fetch messages
router.get('/admin/messages', getMessages);

module.exports = router;

