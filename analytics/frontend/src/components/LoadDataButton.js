import React from "react";
import "../App.css";
import { useMutation } from "@tanstack/react-query";
import { loadData } from "../api/cassandraService";

function LoadDataButton() {
  const {
    mutate: loadDataFromBackend,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useMutation(loadData);

  return (
    <div>
      {isError && (
        <div id="error-label">
          <div>Error: {error.message}</div>
        </div>
      )}
      {isSuccess && (
        <div id="success-label">
          <div>Data loaded successfully!</div>
        </div>
      )}
      <button
        onClick={() => loadDataFromBackend()}
        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        {isLoading ? "Loading..." : "Load Data"}
      </button>
    </div>
  );
}

export default LoadDataButton;
