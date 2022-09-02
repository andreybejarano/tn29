-- 
SELECT DISTINCT actors.first_name, actors.last_name  
FROM actors
INNER JOIN actor_movie ON actor_movie.actor_id = actors.id
INNER JOIN movies ON actor_movie.movie_id = movies.id
WHERE movies.title LIKE '%guerra%';

SELECT movies.title, COALESCE(genres.name, 'no tiene género') as genre
FROM movies
LEFT JOIN genres ON genres.id = movies.genre_id;

SELECT movies.title, genres.name
FROM movies
LEFT JOIN genres ON genres.id = movies.genre_id;

SELECT title AS Titulo, DATEDIFF(end_date, release_date) AS duracion 
FROM movies_db.series;

SELECT title AS Titulo, TIMESTAMPDIFF(day, release_date, end_date) AS duracion 
FROM movies_db.series;

SELECT * FROM actors 
WHERE LENGTH(first_name) > 6
ORDER BY first_name;

SELECT count(*) AS cantidad_episodios FROM episodes;

SELECT series.title, count(seasons.id) AS cant_temporadas
FROM series
INNER JOIN seasons ON series.id = seasons.serie_id
GROUP by series.id;

SELECT genres.name, count(movies.title) as title
FROM movies
INNER JOIN genres ON genres.id = movies.genre_id
GROUP BY genres.id
HAVING COUNT(*) >= 3;
