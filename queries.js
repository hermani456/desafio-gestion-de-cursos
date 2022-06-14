const pool = require('./db')

async function coursesGet() {
	try {
		const result = await pool.query(`SELECT * FROM cursos`)
		return result.rows
	} catch (e) {
		return e
	}
}

async function coursesPost(body) {
   console.log(body)
	const { nombre, nivel, fecha, duracion } = body
	try {
		const result = await pool.query(
			`INSERT INTO cursos (nombre, nivel, fecha, duracion) VALUES ($1, $2, $3, $4)`,
			[nombre, nivel, fecha, duracion]
		)
		return result.rows
	} catch (error) {
		console.log(error)
	}
}

async function coursesPut(body, id) {
	const { nombre, nivel, fecha, duracion } = body
   try {
      const result = await pool.query('UPDATE cursos SET nombre = $1, nivel = $2, fecha = $3, duracion = $4 WHERE id = $5', [nombre, nivel, fecha, duracion, id])
   } catch (error) {
      console.log(error)
   }
}

module.exports = { coursesGet, coursesPost, coursesPut }
