import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', profilesCtrl.index)
router.get('/:profileId', isLoggedIn, profilesCtrl.show)

export { router }
