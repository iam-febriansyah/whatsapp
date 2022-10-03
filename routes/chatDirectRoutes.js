import { Router } from 'express'
import * as controller from '../controllers/chatDirectController.js'

const router = Router()

router.post('/send-direct-text', controller.sendText)
router.post('/send-direct-document', controller.sendDoc)
router.post('/send-direct-image', controller.sendImage)

export default router
