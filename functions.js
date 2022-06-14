const {
	coursesGet,
	coursesPost,
	coursesPut,
	coursesDelete,
} = require('./queries')

const getCourses = async (req, res) => {
	try {
		const courses = await coursesGet()
		res.json(courses)
	} catch (error) {
		console.log(error)
	}
}

const postCourses = async (req, res) => {
	const body = req.body
	try {
		const response = await coursesPost(body)
		res.json(response)
	} catch (error) {
		console.log(error)
	}
}

const putCourses = async (req, res) => {
	const { id } = req.params
	const body = req.body
	try {
		const response = await coursesPut(body, id)
		res.json(response)
	} catch (error) {
		console.log(error)
	}
}

const deleteCourse = async (req, res) => {
	const { id } = req.params
	try {
		const response = await coursesDelete(id)
		res.json(response)
	} catch (error) {
		console.log(error)
	}
}

module.exports = { getCourses, postCourses, putCourses, deleteCourse }
