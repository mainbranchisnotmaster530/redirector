const express = require('express')
const helmet = require('helmet')

const app = express()
app.use(helmet())

app.get('/taipan89', (_req, res) => {
	res.redirect(302, 'https://167.172.90.64/')
})

app.get('/bintang138', (_req, res) => {
	res.redirect(302, 'https://128.199.236.41/')
})

app.get('*', (_req, res) => {
	res.redirect(302, 'https://www.scmp.com/')
})

app.listen(process.env.PORT || 3000, () => {
	console.log('Server successfully launched.')
})
