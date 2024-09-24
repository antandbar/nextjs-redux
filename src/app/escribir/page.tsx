'use client'
import { guardarnombre } from "@/store/slices/valuesSlice";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Page:React.FC = () => {
    const [nuevoValor, setNuevoValor] = useState("")
    const dispatch = useDispatch()
    const modificar = () => {
        dispatch(guardarnombre(nuevoValor))
    }
    return (
        <div className="flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold mb-4">Escribir:</h1>
        <div className="mb-4">
          <Link href="/leer" className="text-blue-500 hover:underline">
            Leer
          </Link>
        </div>
        <input
          value={nuevoValor}
          onChange={(e) => setNuevoValor(e.target.value)}
          className="border border-gray-300 rounded p-2 mb-4"
          placeholder="Introduce un nuevo valor"
        />
        <button
          onClick={modificar}
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
        >
          Modificar el valor
        </button>
      </div>
    )
}

export default Page