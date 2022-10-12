import { Router } from 'express'
import * as controller from '../controllers/chatDirectController.js'

const router = Router()

router.post('/send-direct-text', controller.sendDirectText)
router.post('/send-direct-document', controller.sendDirectDoc)
router.post('/send-direct-image', controller.sendDirectImage)

router.get('/send-direct-text', controller.sendDirectTextGet)
router.get('/send-direct-document', controller.sendDirectDocGet)
router.get('/send-direct-image', controller.sendDirectImageGet)

export default router
