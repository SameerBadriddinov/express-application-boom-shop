import {Router} from 'express'
import authMiddleware from '../middleware/auth.js'
import userMiddleware from '../middleware/user.js'
import Product from '../models/Product.js'

const router = Router()

router.get('/', (req, res) => {
	res.render('index', {
		title: 'Boom shop | Sammi',
	})
})

router.get('/products', (req, res) => {
	res.render('products', {
		title: 'Products | Sammi',
		isProducts: true,
	})
})

router.get('/add', authMiddleware, (req, res) => {
	res.render('add', {
		title: 'Add products',
		isAdd: true,
		errorAddProducts: req.flash('errorAddProducts'),
	})
})

router.post('/add-products', userMiddleware, async (req, res) => {
	const {title, description, image, price} = req.body
	if (!title || !description || !image || !price) {
		req.flash('errorAddProducts', 'All fields is required')
		res.redirect('/add')
		return
	}

	await Product.create({...req.body, user: req.userId})
	res.redirect('/')
})

export default router
