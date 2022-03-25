import express from 'express'
import {insert} from '../controllers/emanagerController.js'

const router = express.Router()

router.route('/insert').post(insert)

export default router