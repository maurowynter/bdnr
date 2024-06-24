import React from "react";
import "../App.css";
import ActivitySearch from "../components/ActivitySearch";
import ActivityForm from "../components/ActivityForm";

function Cassandra() {
  return (
    <div className="wrapper">
      <ActivityForm />
      <ActivitySearch />
    </div>
  );
}

export default Cassandra;
