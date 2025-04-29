import express from 'express'
import { addSchool } from '../controllers/schoolControllers'
const router = express.Router()


router.post('/addSchool', addSchool)


export default router