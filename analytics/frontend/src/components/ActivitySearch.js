import React, { useState } from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { fetchActivities } from "../api/cassandraService";

function GetActivities(searchTerm) {
  const {
    data: activities,
    isLoading,
    refetch,
  } = useQuery(
    ["getActivities", searchTerm],
    async () => await fetchActivities(searchTerm)
  );
  const data = activities ?? [];
  return {
    data,
    isLoading,
    refetch,
  };
}

function ActivitySearch() {
  const { register, handleSubmit, reset } = useForm();
  const [searchTerm, setSearchTerm] = useState("");
  const { data: activities, isLoading, refetch } = GetActivities(searchTerm);

  const onSubmit = async (data) => {
    const search = {
      game_id: data.game_id,
      event_date: data.event_date,
    };

    setSearchTerm(search);
    reset();
  };

  return (
    <div className="App">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Search Activities
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="game_id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Game ID
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="game_id"
                    id="game_id"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("game_id")}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="event_date"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Event Date
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="event_date"
                    id="event_date"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("event_date")}
                  />
                </div>
              </div>

              <div className="mt-8 flex items-center justify-end gap-x-6">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Search
                  {isLoading && "..."}
                </button>
              </div>
            </div>
          </div>
        </div>

        {activities && (
          <table className="activity-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Game ID</th>
                <th>Type</th>
                <th>Data</th>
                <th>Event Date</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id}>
                  <td>{activity.id}</td>
                  <td>{activity.user_id}</td>
                  <td>{activity.game_id}</td>
                  <td>{activity.activity_type}</td>
                  <td>
                    {activity.data &&
                      Object?.entries(activity?.data)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join(", ")}
                  </td>
                  <td>{activity.event_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </form>
    </div>
  );
}

export default ActivitySearch;
