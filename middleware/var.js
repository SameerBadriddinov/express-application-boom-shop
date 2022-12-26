export default function (req, res, next) {
	const isAuth = req.cookies.token ? true : false
	res.locals.token = isAuth
	next()
}
