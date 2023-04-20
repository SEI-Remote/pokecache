import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:profileId', isLoggedIn, profilesCtrl.show)
router.post('/requestFriend/:profileId', isLoggedIn, profilesCtrl.requestFriend)
router.patch('/acceptFriend/:profileId', isLoggedIn, profilesCtrl.acceptFriend)
router.delete('/removeFriend/:profileId', isLoggedIn, profilesCtrl.removeFriend)


export { router }
