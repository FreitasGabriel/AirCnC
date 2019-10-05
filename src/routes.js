const express = require('express')
const multer = require('multer')
const uploadConfig= require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router();
const upload = multer(uploadConfig);

//ROUTES

//SESSIONS
routes.post('/sessions', SessionController.store );

//SPOTS
routes.post('/spots', upload.single('thumbnail'), SpotController.store ); //upload.single() para uma única imagem
routes.get('/spots', SpotController.index);

//DASHBOARD
routes.get('/dashboards', DashboardController.show);

//BOOKING
routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes;