"use client";

import { useEffect, useState } from "react";

// Define the type for a meeting
type Reuniao = {
  id: number;
  titulo: string;
  data: string;
  local: string;
};

// src/components/MeetingList.tsx
export default function MeetingList() {
  const [reunioes, setReunioes] = useState<Reuniao[]>([]);
  const [showmodal, setShowModal] = useState(false);

  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");

  // 1. Load meetings from localStorage on start
  useEffect(() => {
    // 2. Load meetings from localStorage
    const stored = localStorage.getItem("reunioes");
    if (stored) {
      setReunioes(JSON.parse(stored));
    }
  }, []);

  // Save every time the meetings change
  useEffect(() => {
    localStorage.setItem("reunioes", JSON.stringify(reunioes));
  }, [reunioes]);

  // 3. Render the list of meetings
  function adicionarReuniao() {
    if (!titulo || !data || !local) return;

    const nova: Reuniao = {
      id: Date.now(),
      titulo,
      data,
      local,
    };

    setReunioes((prev) => [...prev, nova]);
    setTitulo("");
    setData("");
    setLocal("");
    setShowModal(false);
  }
  return (
    <div className="relative bg-white p-4 rounded shadow-md text-black space-y-4">
      <div className="flex justify-between items-center ">
        <div className="text-lg font-semibold">Reuniões</div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Criar Reunião
        </button>
      </div>

      {reunioes.length === 0 ? (
        <p className="text-gray-500">Nenhuma reunião agendada</p>
      ) : (
        <ul className="space-y-2">
          {reunioes.map((r) => (
            <li
              key={r.id}
              className="bg-gray-100 p-3 rounded-lg shadow text-sm text-gray-800"
            >
              <strong>{r.titulo}</strong> - {r.data} @ {r.local}
              <br />
              {new Date(r.data).toLocaleString()} - {r.local}
            </li>
          ))}
        </ul>
      )}

      {showmodal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md space-y4">
            <h3 className="text-lg font-semibold">Nova Reuniao</h3>
            <input
              type="text"
              placeholder="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="datetime-local"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Local"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-2 py-1 text-gray-600 hover:text-gray-700"
              >
                Fechar
              </button>
              <button
                onClick={adicionarReuniao}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
