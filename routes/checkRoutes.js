import { Router } from 'express'
import * as controller from '../controllers/checkController'

const router = Router()

router.post('/restart', controller.restart)
router.post('/connected', controller.connected)

export default router
