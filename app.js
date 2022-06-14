const express = require('express')
const app = express()
const {getCourses, postCourses, putCourses, deleteCourse} = require('./functions')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/api/v1/cursos', getCourses)

app.post('/api/v1/cursos', postCourses)

app.put('/api/v1/cursos/:id', putCourses)

app.delete('/api/v1/cursos/:id', deleteCourse)

app.listen(3000, () => {
	console.log('Server is running at http://localhost:3000')
})
