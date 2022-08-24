-- Paso 1.1
insert into genres (name, ranking, active) values ('Investigación', 13, 1);

-- Paso 1.2
update genres set name = 'Investigación Científica' where id = 13;

-- Paso 1.3 
delete from genres where id = 13;

-- Paso 1.4
select * from movies;

-- Paso 1.5
select concat(first_name, ' ', last_name) as name, rating from actors;

-- Paso 1.6
select title from series;

-- Paso 2.1
select first_name, last_name from actors where rating > 7.5;

-- Paso 2.2
select title, rating, awards from movies where rating > 7.5 and awards > 2;

-- Paso 2.3
select title, rating from movies order by rating asc;

-- Paso 3.1
select title from movies limit 3;

-- Paso 3.2
select * from movies order by rating desc limit 5;

-- Paso 3.3
select * from movies order by rating desc limit 5 offset 5;

-- Paso 3.4
select * from actors limit 10 offset 0;

-- Paso 3.4.a
select * from actors limit 10 offset 20;

-- Paso 4.1
select title, rating from movies where title like '%harry potter%';

-- Paso 4.2
select * from actors where first_name like 'sa%';

-- Paso 4.3
select title, release_date from movies where year(release_date) between 2004 and 2008;
