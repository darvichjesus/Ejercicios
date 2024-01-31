import Libro from './libro.js';

const libros = [
  new Libro('Libro 1', 'Autor 1', 2000),
  new Libro('Libro 2', 'Autor 2', 2010),
  new Libro('Libro 3', 'Autor 3', 2020),
  new Libro('Libro 4', 'Autor 4', 1995),
];

function filtrarLibrosPorAnio(libros, anio) {
  return libros.filter(libro => libro.anioPublicacion > anio);
}

const librosFiltrados = filtrarLibrosPorAnio(libros, 1990);

const librosFiltradosDiv = document.getElementById('librosFiltrados');
librosFiltrados.forEach(libro => {
  const libroDiv = document.createElement('div');
  libroDiv.innerHTML = `<h3>${libro.titulo}</h3>
                        <p>Autor: ${libro.autor}</p>
                        <p>Año de publicación: ${libro.anioPublicacion}</p>`;
  librosFiltradosDiv.appendChild(libroDiv);
});