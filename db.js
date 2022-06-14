const { Pool } = require('pg')
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'cursos_db',
	password: 'pw456',
	port: 5432,
})

module.exports = pool