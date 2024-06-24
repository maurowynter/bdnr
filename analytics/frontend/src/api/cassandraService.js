import axios from "axios";

// URL base de tu API
const BASE_URL = "http://localhost:3000/api";

// Función para crear una nueva actividad
export const createActivity = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/activities`, data);
    return response.data;
  } catch (error) {
    console.error("Error creando la actividad:", error);
    throw error;
  }
};

// Función para obtener actividades con parámetros opcionales
export const fetchActivities = async (params) => {
  try {
    const response = await axios.get(`${BASE_URL}/activities`, { params });
    return response.data;
  } catch (error) {
    console.error("Error obteniendo las actividades:", error);
    throw error;
  }
};

// Función para obtener una actividad por ID
export const fetchActivityById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/activities/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo la actividad por ID:", error);
    throw error;
  }
};

// Función para cargar datos
export const loadData = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/load-data`);
    return response.data;
  } catch (error) {
    console.error("Error cargando datos:", error);
    throw error;
  }
};
