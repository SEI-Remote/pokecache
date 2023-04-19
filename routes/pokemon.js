import { Router } from 'express'
import * as pokemonCtrl from '../controllers/pokemon.js'

const router = Router()

router.get('/', pokemonCtrl.index)
// GET /pokemon/search 
router.get('/search', pokemonCtrl.search)
router.get('/:pokemonName', pokemonCtrl.show)
export { router }
