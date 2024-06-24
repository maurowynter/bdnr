const express = require("express");
const router = express.Router();
const { cassandraClient } = require("../data_access/db_connection");
const { v4: uuidv4 } = require("uuid");
const { loadData } = require("../service/load_data");

router.post("/activities", async (req, res, next) => {
  try {
    const { user_id, game_id, activity_type, data } = req.body;

    const id = uuidv4();
    const timestamp = new Date().toISOString();

    const query = `
      INSERT INTO activity_tracking (game_id, event_date, id, user_id, activity_type, timestamp, data)
      VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    const params = [
      game_id,
      timestamp.substr(0, 10),
      id,
      user_id,
      activity_type,
      timestamp,
      data,
    ];

    cassandraClient.execute(query, params, { prepare: true }, (err) => {
      if (err) {
        console.error("Error al crear la actividad:", err);
        res.status(500).send("Error al crear la actividad");
      } else {
        res
          .status(201)
          .send({ message: "Actividad creada exitosamente", activity_id: id });
      }
    });
  } catch (err) {
    next(err);
  }
});

router.get("/activities", async (req, res, next) => {
  try {
    const { game_id, event_date } = req.query;

    let query = "SELECT * FROM activity_tracking";
    let params = [];

    if (game_id && event_date) {
      query += " WHERE game_id = ? AND event_date = ? ALLOW FILTERING";
      params = [game_id, event_date];
    } else if (game_id) {
      query += " WHERE game_id = ? ALLOW FILTERING";
      params = [game_id];
    } else if (event_date) {
      query += " WHERE event_date = ? ALLOW FILTERING";
      params = [event_date];
    }

    const result = await cassandraClient.execute(query, params, {
      prepare: true,
    });
    const activities = result.rows;
    res.json(activities);
  } catch (err) {
    console.error("Error al obtener las actividades:", err);
    res.status(500).send("Error al obtener las actividades");
  }
});

router.get("/activities/:id", async (req, res) => {
  const { id } = req.params;

  const query = "SELECT * FROM activity_tracking WHERE id = ? ALLOW FILTERING;";
  const params = [id];

  try {
    const result = await cassandraClient.execute(query, params, {
      prepare: true,
    });
    const activity = result.first();

    if (activity) {
      res.json(activity);
    } else {
      res.status(404).send("Actividad no encontrada");
    }
  } catch (err) {
    console.error("Error al obtener la actividad:", err);
    res.status(500).send("Error al obtener la actividad");
  }
});

router.post("/load-data", async (req, res, next) => {
  try {
    await loadData();
    res.status(200).send("Data loaded successfully");
  } catch (err) {
    console.error("Error loading data:", err);
    res.status(500).send("Error loading data");
  }
});

module.exports = router;
