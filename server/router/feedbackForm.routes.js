const Router = require('express')
const router = new Router()
const feedbackFormController = require('../controller/feedbackForm.controller')

router.get('/feedbackForm', feedbackFormController.getForm)
router.post('/feedbackForm', feedbackFormController.sendingForm)


module.exports = router