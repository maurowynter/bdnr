from neo4j import GraphDatabase

class Neo4jDatabase:
    def __init__(self, uri, user, password):
        self.driver = GraphDatabase.driver(uri, auth=(user, password))
    
    def close(self):
        self.driver.close()
        
    def clear_db(self):
        query = "MATCH (n) DETACH DELETE n"
        with self.driver.session() as session:
            session.run(query)

    def create_user(self, user_id, name):
        query = """
        CREATE (u:User {id: $id, name: $name})
        """
        with self.driver.session() as session:
            session.run(query, id=user_id, name=name)

    def create_videogame(self, videogame_id, title, genre):
        query = """
        CREATE (v:Videogame {id: $id, title: $title})
        WITH v
        MATCH (g:Genre {name: $genre})
        MERGE (v)-[:IS_OF_GENRE]->(g)
        """
        with self.driver.session() as session:
            session.run(query, id=videogame_id, title=title, genre=genre)

    def create_rating(self, user_id, videogame_id, stars, comments):
        query = """
        MATCH (u:User {id: $user_id}), (v:Videogame {id: $videogame_id})
        CREATE (u)-[:DID]->(r:Rating {stars: $stars, comments: $comments})-[:OF]->(v)
        """
        with self.driver.session() as session:
            session.run(query, user_id=user_id, videogame_id=videogame_id,
                        stars=stars, comments=comments)
            
    def create_community(self, community_id, name):
        query = """
        CREATE (c:Community {id: $id, name: $name})
        """
        with self.driver.session() as session:
            session.run(query, id=community_id, name=name)
    
    def create_genre(self, name):
        query = """
        CREATE (g:Genre {name: $name})
        """
        with self.driver.session() as session:
            session.run(query, name=name)
    
    def add_user_to_community(self, user_id, community_id):
        query = """
        MATCH (u:User {id: $user_id}), (c:Community {id: $community_id})
        CREATE (u)-[:BELONGS_TO]->(c)
        """
        with self.driver.session() as session:
            session.run(query, user_id=user_id, community_id=community_id)

    def create_friendship(self, user1_id, user2_id):
        query = """
        MATCH (u1:User {id: $user1_id}), (u2:User {id: $user2_id})
        CREATE (u1)-[:IS_FRIEND]->(u2)
        """
        with self.driver.session() as session:
            session.run(query, user1_id=user1_id, user2_id=user2_id)
             
    def create_videogame_relationship(self, videogame1_id, videogame2_id, relation):
        query = '''
        MATCH (v1:Videogame {id: $videogame1_id})
        MATCH (v2:Videogame {id: $videogame2_id})
        CREATE (v1)-[:%s]->(v2)
        ''' % relation
        with self.driver.session() as session:
            session.run(query, videogame1_id=videogame1_id, videogame2_id=videogame2_id)

    def create_visit(self, user_id, videogame_id):
        query = '''
        MATCH (u:User {id: $user_id})
        MATCH (v:Videogame {id: $videogame_id})
        CREATE (u)-[:VISITED]->(v)
        '''
        with self.driver.session() as session:
            session.run(query, user_id=user_id, videogame_id=videogame_id)

    def create_purchase(self, user_id, videogame_id):
        query = '''
        MATCH (u:User {id: $user_id})
        MATCH (v:Videogame {id: $videogame_id})
        CREATE (u)-[:BOUGHT]->(v)
        '''
        with self.driver.session() as session:
            session.run(query, user_id=user_id, videogame_id=videogame_id)

# Singleton for the Neo4jDatabase instance
neo4j_db = Neo4jDatabase(uri='bolt://localhost:7687', user='neo4j', password='password')
