"use client";

import { useDispatch, useSelector } from "react-redux";
import { incrementarContador, resetearContador } from "@/store/slices/valuesSlice";
import { RootState } from "@/store/store";

const ContadorComponent = () => {
  const dispatch = useDispatch();
  const contador = useSelector((state: RootState)  => state.valores.contador);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Contador: {contador}</h1>
      <button
        onClick={() => dispatch(incrementarContador())}
        className="bg-blue-500 text-white p-2 rounded mb-2"
      >
        Incrementar
      </button>
      <button
        onClick={() => dispatch(resetearContador())}
        className="bg-red-500 text-white p-2 rounded"
      >
        Resetear
      </button>
    </div>
  );
};

export default ContadorComponent;
