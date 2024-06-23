from .models import neo4j_db

users = [
    {'id': '1', 'name': 'Federico'},
    {'id': '2', 'name': 'Giorgian'},
    {'id': '3', 'name': 'Manuel'},
    {'id': '4', 'name': 'Darwin'},
    {'id': '5', 'name': 'Ronald'},
    {'id': '6', 'name': 'Nahitan'},
    {'id': '7', 'name': 'Nicolas'},
    {'id': '8', 'name': 'Marcelo'},
    {'id': '9', 'name': 'Luis'},
    {'id': '10', 'name': 'Maximiliano'}
]

videogames = [
    {'id': '101', 'title': 'Cyberpunk 2077', 'genre': 'RPG'},
    {'id': '102', 'title': 'The Witcher 3', 'genre': 'RPG'},
    {'id': '103', 'title': 'Halo Infinite', 'genre': 'FPS'},
    {'id': '104', 'title': 'Call of Duty: Warzone', 'genre': 'FPS'},
    {'id': '105', 'title': 'Animal Crossing: New Horizons', 'genre': 'Simulation'},
    {'id': '106', 'title': 'FIFA 23', 'genre': 'Sports'},
    {'id': '107', 'title': 'FIFA 24', 'genre': 'Sports'},
    {'id': '108', 'title': 'GTA V', 'genre': 'Simulation'},
    {'id': '109', 'title': 'Mario Kart', 'genre': 'Family'},
    {'id': '110', 'title': 'The Sims 4', 'genre': 'Simulation'}
]

ratings = [
    {'user_id': '1', 'videogame_id': '101', 'stars': 5, 'comment': 'Excelente juego!'},
    {'user_id': '2', 'videogame_id': '102', 'stars': 4, 'comment': 'Muy muy bueno!'},
    {'user_id': '3', 'videogame_id': '103', 'stars': 3, 'comment': 'Esta ok'},
    {'user_id': '4', 'videogame_id': '104', 'stars': 2, 'comment': 'No me gusto mucho'},
    {'user_id': '5', 'videogame_id': '105', 'stars': 5, 'comment': 'Muy divertido!'},
    {'user_id': '1', 'videogame_id': '102', 'stars': 4, 'comment': 'Muy bueno'},
    {'user_id': '2', 'videogame_id': '101', 'stars': 5, 'comment': 'Impresionante'},
    {'user_id': '6', 'videogame_id': '106', 'stars': 4, 'comment': 'Me encanto!'},
    {'user_id': '7', 'videogame_id': '107', 'stars': 5, 'comment': 'Pectacular'},
    {'user_id': '8', 'videogame_id': '108', 'stars': 3, 'comment': 'Nada mal'},
    {'user_id': '9', 'videogame_id': '109', 'stars': 4, 'comment': 'Genial para jugar con los nenes!'},
    {'user_id': '10', 'videogame_id': '110', 'stars': 5, 'comment': 'Adictivo!'},
    {'user_id': '1', 'videogame_id': '105', 'stars': 4, 'comment': 'Muy desestresante. Prefiero jugar finales de champions'},
    {'user_id': '2', 'videogame_id': '103', 'stars': 3, 'comment': 'Puede y debe mejorar'},
    {'user_id': '3', 'videogame_id': '104', 'stars': 5, 'comment': 'Epico!'}
]

communities = [
    {'id': '501', 'name': 'Jugadores Uruguay'},
    {'id': '502', 'name': 'Hinchas de los FPS'},
    {'id': '503', 'name': 'Comunidad RPG'},
    {'id': '504', 'name': 'Los Simuladores'}
]

genres = [
    {'name': 'RPG'},
    {'name': 'FPS'},
    {'name': 'Simulation'},
    {'name': 'Sports'},
    {'name': 'Family'}
]

users_communities = [
    {'user_id': '1', 'community_id': '501'},
    {'user_id': '2', 'community_id': '501'},
    {'user_id': '3', 'community_id': '502'},
    {'user_id': '4', 'community_id': '503'},
    {'user_id': '5', 'community_id': '501'},
    {'user_id': '6', 'community_id': '504'},
    {'user_id': '7', 'community_id': '503'},
    {'user_id': '8', 'community_id': '502'},
    {'user_id': '9', 'community_id': '503'},
    {'user_id': '10', 'community_id': '504'}
]

friends = [
    {'user1_id': '1', 'user2_id': '2'},
    {'user1_id': '3', 'user2_id': '4'},
    {'user1_id': '4', 'user2_id': '5'},
    {'user1_id': '2', 'user2_id': '3'},
    {'user1_id': '3', 'user2_id': '5'},
    {'user1_id': '6', 'user2_id': '7'},
    {'user1_id': '7', 'user2_id': '8'},
    {'user1_id': '8', 'user2_id': '9'},
    {'user1_id': '9', 'user2_id': '10'},
    {'user1_id': '10', 'user2_id': '1'},
    {'user1_id': '1', 'user2_id': '4'},
    {'user1_id': '5', 'user2_id': '1'},
    {'user1_id': '3', 'user2_id': '8'},
    {'user1_id': '6', 'user2_id': '8'},
    {'user1_id': '10', 'user2_id': '4'},
    {'user1_id': '4', 'user2_id': '2'}
]

videogame_relationships = [
    {'videogame1_id': '106', 'videogame2_id': '107', 'relation': 'RELATED_TO'},
]

visits = [
    {'user_id': '1', 'videogame_id': '101'},
    {'user_id': '2', 'videogame_id': '102'},
    {'user_id': '3', 'videogame_id': '103'},
    {'user_id': '4', 'videogame_id': '104'},
    {'user_id': '5', 'videogame_id': '105'},
    {'user_id': '6', 'videogame_id': '106'},
    {'user_id': '7', 'videogame_id': '107'},
    {'user_id': '8', 'videogame_id': '108'},
    {'user_id': '9', 'videogame_id': '109'},
    {'user_id': '10', 'videogame_id': '110'},
    {'user_id': '1', 'videogame_id': '102'},
    {'user_id': '2', 'videogame_id': '101'},
    {'user_id': '3', 'videogame_id': '104'},
    {'user_id': '4', 'videogame_id': '105'},
    {'user_id': '5', 'videogame_id': '106'},
]

purchases = [
    {'user_id': '1', 'videogame_id': '101'},
    {'user_id': '2', 'videogame_id': '102'},
    {'user_id': '3', 'videogame_id': '103'},
    {'user_id': '4', 'videogame_id': '104'},
    {'user_id': '5', 'videogame_id': '105'},
    {'user_id': '6', 'videogame_id': '106'},
    {'user_id': '7', 'videogame_id': '107'},
    {'user_id': '8', 'videogame_id': '108'},
    {'user_id': '9', 'videogame_id': '109'},
    {'user_id': '10', 'videogame_id': '110'},
    {'user_id': '1', 'videogame_id': '102'},
    {'user_id': '2', 'videogame_id': '101'},
    {'user_id': '6', 'videogame_id': '107'},
    {'user_id': '8', 'videogame_id': '109'},
    {'user_id': '10', 'videogame_id': '108'}
]

def initialize_db():
    # Clear database
    neo4j_db.clear_db()
    
    # Create genres
    for genre in genres:
        neo4j_db.create_genre(genre['name'])
    
    # Create users
    for user in users:
        neo4j_db.create_user(user['id'], user['name'])
    
    # Create communities
    for community in communities:
        neo4j_db.create_community(community['id'], community['name'])
    
    # Create videogames and assign genres
    for videogame in videogames:
        neo4j_db.create_videogame(videogame['id'], videogame['title'], videogame['genre'])
    
    # Add users to communities
    for user_community in users_communities:
        neo4j_db.add_user_to_community(user_community['user_id'], user_community['community_id'])
    
    # Create ratings
    for rating in ratings:
        neo4j_db.create_rating(rating['user_id'], rating['videogame_id'], rating['stars'], rating['comment'])
    
    # Create friendship relationships
    for friend in friends:
        neo4j_db.create_friendship(friend['user1_id'], friend['user2_id'])
    
    # Create videogame relationships
    for relationship in videogame_relationships:
        neo4j_db.create_videogame_relationship(relationship['videogame1_id'], relationship['videogame2_id'], relationship['relation'])
    
    # Create visits
    for visit in visits:
        neo4j_db.create_visit(visit['user_id'], visit['videogame_id'])
    
    # Create purchases
    for purchase in purchases:
        neo4j_db.create_purchase(purchase['user_id'], purchase['videogame_id'])

# Run initialization
if __name__ == "__main__":
    initialize_db()
