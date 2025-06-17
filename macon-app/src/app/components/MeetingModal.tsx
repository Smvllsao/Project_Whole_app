"use client";

import { useState } from "react";

type Props = {
  onClose: () => void;
  onCreate: (reuniao: { titulo: string; data: string; local: string }) => void;
};

export default function MeetingModal({ onClose, onCreate }: Props) {
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!titulo || !data || !local) return;
    onCreate({ titulo, data, local });
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Criar Reunião</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="datetime-local"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Local"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
            >
              Criar Reunião
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:text-gray-400 "
            >
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
