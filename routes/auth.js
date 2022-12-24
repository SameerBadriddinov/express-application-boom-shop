import {Router} from 'express'
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

export default router
