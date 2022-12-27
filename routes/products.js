import {Router} from 'express'
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

router.get('/add', (req, res) => {
	res.render('add', {
		title: 'Add products',
		isAdd: true,
	})
})

router.post('/add-products', async (req, res) => {
	const {title, description, image, price} = req.body
	const products = await Product.create(req.body)
	console.log(products)
	res.redirect('/')
})

export default router
