const { Client } = require("cassandra-driver");

const cassandraClient = (function () {
  try {
    const client = new Client({
      contactPoints: ["127.0.0.1"], // IP local para Cassandra
      localDataCenter: "datacenter1", // Nombre del data center
      keyspace: "tracking_analytics", // Nombre del keyspace
    });

    client.connect((err) => {
      if (err) {
        console.error("Error connecting to Cassandra", err);
      } else {
        console.log("Cassandra successfully connected");
      }
    });

    return client;
  } catch (err) {
    console.log("Error occurred while initializing Cassandra", err);
  }
})();

module.exports = {
  cassandraClient,
};
