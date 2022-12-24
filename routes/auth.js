import {Router} from 'express'
import User from '../models/User.js'
const router = Router()

router.get('/login', (req, res) => {
	res.render('login', {
		title: 'Login | Sammi',
		isLogin: true,
	})
})

router.get('/register', (req, res) => {
	res.render('register', {
		title: 'Register | Sammi',
		isRegister: true,
	})
})

router.post('/login', (req, res) => {
	console.log(req.body)
	res.redirect('/')
})

router.post('/register', async (req, res) => {
	const userData = {
		firstName: req.body.firstname,
		lastName: req.body.lastname,
		email: req.body.email,
		password: req.body.password,
	}
	const user = await User.create(userData)
	res.redirect('/')
})

export default router
