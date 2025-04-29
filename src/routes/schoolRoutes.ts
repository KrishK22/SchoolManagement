import express from 'express'
import { addSchool, getSchools } from '../controllers/schoolControllers'
const router = express.Router()


router.post('/addSchool', addSchool)

router.get('/listSchools', getSchools)


export default router