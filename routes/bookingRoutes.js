const express = require('express')
const bookingController = require('../controllers/bookingController')
const authController = require('../controllers/authController')


const router = express.Router();

router.use(authController.protect)

// POST /tour/23423423/reviews
// POST /reviews
router.get('/checkout-session/:tourId',
bookingController.getCheckoutSession
)

router.get('/my-bookings', bookingController.getMyBookings)

router.use(authController.restrictTo('admin', 'lead-guide'))

router.route('/')
.get(bookingController.getAllBooking)
.post(bookingController.createBooking)

router.route('/:id')
.get(bookingController.getBooking)
.patch(bookingController.updateBooking)
.delete(bookingController.deleteBooking)

module.exports = router