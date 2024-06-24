const { cassandraClient } = require("../data_access/db_connection");
const { v4: uuidv4 } = require("uuid");

async function loadData() {
  try {
    // Tipos de actividad posibles
    const activityTypes = ["start", "play", "end", "pause", "resume"];

    // Generar 10 juegos
    for (let gameIndex = 1; gameIndex <= 10; gameIndex++) {
      const game_id = `game${gameIndex}`;

      // Generar 10 actividades por juego
      for (let activityIndex = 1; activityIndex <= 10; activityIndex++) {
        const user_id = `user${gameIndex * 10 + activityIndex}`;
        const activity_type =
          activityTypes[activityIndex % activityTypes.length];
        const data = {
          level: `${(activityIndex % 5) + 1}`,
          score: `${(activityIndex + 1) * 100}`,
        };

        const id = uuidv4();
        const timestamp = new Date().toISOString();

        const query = `INSERT INTO activity_tracking (game_id, event_date, id, user_id, activity_type, timestamp, data) 
                       VALUES (?, ?, ?, ?, ?, ?, ?);`;

        const params = [
          game_id,
          timestamp.substr(0, 10),
          id,
          user_id,
          activity_type,
          timestamp,
          data,
        ];
        await cassandraClient.execute(query, params, { prepare: true });
        console.log(
          `Inserted data for game ${game_id}, activity ${activity_type}, user ${user_id}`
        );
      }
    }

    console.log("Data insertion completed!");
  } catch (error) {
    console.error("Error inserting data:", error);
  }
}

module.exports = {
  loadData,
};
