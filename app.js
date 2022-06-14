const express = require('express')
const app = express()
const {getCourses, postCourses, putCourses} = require('./functions')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/cursos', getCourses)

app.post('/curso', postCourses)

app.put('/curso/:id', putCourses)

app.listen(3000, () => {
	console.log('Server is running at http://localhost:3000')
})
