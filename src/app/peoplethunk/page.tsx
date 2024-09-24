"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchPerson, resetPeople } from "@/store/slices/peopleThunkSlice"; 
import { RootState, AppDispatch } from "@/store/store"; // Asegúrate de que la ruta sea correcta
import React from "react";

const PeopleComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Usar AppDispatch para el dispatch
  const { nombre, apellido, loading, error } = useSelector((state: RootState) => state.peopleThunk);

  const obtenerPersona = () => {
    dispatch(fetchPerson());
  };

  const limpiarPersona = () => {
    dispatch(resetPeople());
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Persona:</h1>
      <button
        onClick={obtenerPersona}
        className="bg-blue-500 text-white p-2 rounded mb-2"
      >
        Obtener Persona
      </button>
      <button
        onClick={limpiarPersona}
        className="bg-red-500 text-white p-2 rounded"
      >
        Limpiar Persona
      </button>
      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {nombre && apellido && (
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Nombre: {nombre} {apellido}
        </h2>
      )}
    </div>
  );
};

export default PeopleComponent;
