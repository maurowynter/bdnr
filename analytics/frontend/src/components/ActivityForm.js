import React, { useState } from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createActivity } from "../api/cassandraService";

function ActivityForm() {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState(null);
  const [keyValuePairs, setKeyValuePairs] = useState([{ key: "", value: "" }]);

  const {
    mutate: createNewActivity,
    isLoading,
    isSuccess,
    isError,
  } = useMutation(async (data) => await createActivity(data), {
    onError: (error) => {
      setError(error.message);
    },
  });

  const handleKeyValueChange = (index, field, value) => {
    const newKeyValuePairs = [...keyValuePairs];
    newKeyValuePairs[index][field] = value;
    setKeyValuePairs(newKeyValuePairs);
  };

  const addKeyValuePair = () => {
    setKeyValuePairs([...keyValuePairs, { key: "", value: "" }]);
  };

  const onSubmit = (data) => {
    const additionalData = {};
    keyValuePairs.forEach((pair) => {
      if (pair.key) {
        additionalData[pair.key] = pair.value;
      }
    });

    data.data = additionalData;

    createNewActivity(data);
    reset();
    setKeyValuePairs([{ key: "", value: "" }]);
  };

  return (
    <div className="App">
      {isError && (
        <div id="error-label">
          <div>Error: {error}</div>
        </div>
      )}
      {isSuccess && (
        <div id="success-label">
          <div>Activity created successfully!</div>
        </div>
      )}
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Create New Activity
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="user_id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  User ID
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="user_id"
                    id="user_id"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("user_id")}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="game_id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Game ID
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="game_id"
                    id="game_id"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("game_id")}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="activity_type"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Activity Type
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="activity_type"
                    id="activity_type"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("activity_type")}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="data"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Additional Data
                </label>
                {keyValuePairs.map((pair, index) => (
                  <div key={index} className="mt-2 flex gap-2">
                    <input
                      type="text"
                      placeholder="Key"
                      value={pair.key}
                      onChange={(e) =>
                        handleKeyValueChange(index, "key", e.target.value)
                      }
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <input
                      type="text"
                      placeholder="Value"
                      value={pair.value}
                      onChange={(e) =>
                        handleKeyValueChange(index, "value", e.target.value)
                      }
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addKeyValuePair}
                  className="mt-2 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400"
                >
                  Add Key-Value Pair
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Activity
            {isLoading && "Creating..."}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ActivityForm;
