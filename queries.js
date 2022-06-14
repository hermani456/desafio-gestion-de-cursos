const pool = require('./db')

async function coursesGet() {
	try {
		const result = await pool.query(`SELECT id, nombre, nivel, TO_CHAR(fecha, 'dd-mm-yyyy') as fecha, duracion FROM cursos`)
		return result.rows
	} catch (e) {
		return e
	}
}

async function coursesPost(body) {
	const { nombre, nivelTecnico, fechaInicio, duracion } = body
	try {
		const result = await pool.query(
			`INSERT INTO cursos (nombre, nivel, fecha, duracion) VALUES ($1, $2, $3, $4) RETURNING *`,
			[nombre, nivelTecnico, fechaInicio, duracion]
		)
      console.log(result)
		return result.rows
	} catch (error) {
		console.log(error)
	}
}

async function coursesPut(body, id) {
	const { nombre, nivelTecnico, fechaInicio, duracion } = body
	try {
		const result = await pool.query(
			'UPDATE cursos SET nombre = $1, nivel = $2, fecha = $3, duracion = $4 WHERE id = $5',
			[nombre, nivelTecnico, fechaInicio, duracion, id]
		)
		return result.rows
	} catch (error) {
		console.log(error)
	}
}

async function coursesDelete(id) {
	try {
		const result = await pool.query('DELETE FROM cursos WHERE id = $1', [id])
		return result.rows
	} catch (error) {
		console.log(error)
	}
}

module.exports = { coursesGet, coursesPost, coursesPut, coursesDelete }
