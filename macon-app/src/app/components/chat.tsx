"use client";

import { useState } from "react";

export default function Chat() {
  const [mensagens, setMensagens] = useState<string[]>([]);
  const [mensagemAtual, setMensagemAtual] = useState("");

  function enviarMensagem(e: React.FormEvent) {
    e.preventDefault();

    if (mensagemAtual.trim() === "") return;

    setMensagens([...mensagens, mensagemAtual]);
    setMensagemAtual("");
  }

  return (
    <div className="bg-white text-gray-800 p-4 rounded-xl shadow-md w-full max-wm-md flex-col space-y-3">
      <h2 className="text-lg font-semibold">Chat</h2>
      <div className="flex-1 h-64 overflow-y-auto border rounded p-2 bg-gray-50">
        {mensagens.length === 0 && (
          <p className="text-gray-500 text-sm text-center">Sem mensagens</p>
        )}
        <ul className="space-y-2">
          {mensagens.map((msg, index) => (
            <li
              key={index}
              className="bg-blue-100 text-blue-900 p-2 rounded max-w-[80%]"
            >
              {msg}
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={enviarMensagem} className="flex space-x-2">
        <input
          type="text"
          placeholder="Digite sua mensagem"
          value={mensagemAtual}
          onChange={(e) => setMensagemAtual(e.target.value)}
          className="flex-1 border rounded p-2 "
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
