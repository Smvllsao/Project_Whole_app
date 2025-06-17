"use client";

import { useState } from "react";

// Define a Message type for better type safety
type Message = {
  id: number;
  text: string;
  sender: string;
};

export default function Chat() {
  const [mensagens, setMensagens] = useState<Message[]>([]);
  const [mensagemAtual, setMensagemAtual] = useState("");

  // Nome fixo por hora
  const sender = "Wagner";

  function enviarMensagem(e: React.FormEvent) {
    e.preventDefault();

    if (mensagemAtual.trim() === "") return;

    const novaMensagem: Message = {
      id: mensagens.length + 1,
      text: mensagemAtual,
      sender: sender,
    };

    setMensagens([...mensagens, novaMensagem]);
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
          {mensagens.map((msg) => (
            <li
              key={msg.id}
              className="bg-blue-100 text-blue-900 p-2 rounded max-w-[80%]"
            >
              <p className="text-xs text-gray-500 mb-1">{msg.sender} disse:</p>
              <p>{msg.text}</p>
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
