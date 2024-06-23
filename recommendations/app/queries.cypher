// En este archivo se pueden encontrar queries que se pueden correr en la interfaz web de neo4j para
// explorar el grafo y obtener recomendaciones

// Ver todo el grafo
MATCH (n)
RETURN n

// Ver todos los usuarios
MATCH (u:User)
RETURN u

// Ver todos los videojuegos y sus generos
MATCH (v:Videogame)-[r:IS_OF_GENRE]->(g:Genre)
RETURN v, r, g

// Ver todas las comunidades y sus miembros
MATCH (c:Community)<-[r:BELONGS_TO]-(u:User)
RETURN c, r, u

// Ver todas las amistades entre usuarios
MATCH (u1:User)-[r:IS_FRIEND]->(u2:User)
RETURN u1, r, u2

// Ver todas las valoraciones hechas por los usuarios
MATCH (u:User)-[r:DID]->(rating:Rating)-[r2:OF]->(v:Videogame)
RETURN u, r, rating, r2, v

// Ver todas las visitas de los usuarios a los videojuegos
MATCH (u:User)-[r:VISITED]->(v:Videogame)
RETURN u, r, v

// Ver todas las compras de los usuarios a los videojuegos
MATCH (u:User)-[r:BOUGHT]->(v:Videogame)
RETURN u, r, v

// Ver todas las relaciones entre videojuegos
MATCH (v1:Videogame)-[r:RELATED_TO]->(v2:Videogame)
RETURN v1, r, v2

// Profundizando en el usuario 1

// Ver todos los amigos del usuario con id 1
MATCH (u:User { id: '1' })-[r:IS_FRIEND]-(friend:User)
RETURN u, r, friend

// Ver todas las calificaciones hechas por el usuario con id 1
MATCH (u:User { id: '1' })-[d:DID]->(r:Rating)-[o:OF]->(v:Videogame)
RETURN u, v, r, o, d

// Ver todas las comunidades a las que pertenece el usuario con id 1
MATCH (u:User { id: '1' })-[r:BELONGS_TO]->(c:Community)
RETURN u, c, r

// Ver todos los videojuegos que ha visitado el usuario con id 1
MATCH (u:User { id: '1' })-[r:VISITED]->(v:Videogame)
RETURN u, v, r

// Ver todos los videojuegos que ha comprado el usuario con id 1
MATCH (u:User { id: '1' })-[r:BOUGHT]->(v:Videogame)
RETURN u, v, r

// Recomendacion de videojuego para el usuario con id 1
MATCH (u:User { id: '1' })-[:IS_FRIEND*2]-(friend)-[:DID]->(r:Rating)-[:OF]->(v:Videogame)
WHERE NOT (u)-[:DID]->(:Rating)-[:OF]->(v)
RETURN v.title AS videogame, avg(r.stars) AS avg_rating
 ORDER BY avg_rating DESC
LIMIT 5
