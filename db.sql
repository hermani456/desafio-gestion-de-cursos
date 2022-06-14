CREATE DATABASE cursos;

CREATE TABLE cursos (id SERIAL PRIMARY KEY, nombre VARCHAR(50), nivel
SMALLINT, fecha DATE, duracion SMALLINT);

INSERT INTO cursos (nombre, nivel, fecha, duracion) VALUES ('PHP', 1, '2020-01-01', 6);