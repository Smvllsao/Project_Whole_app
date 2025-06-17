"use client";

import { useEffect, useState } from "react";

type Notification = {
  id: number;
  message: string;
  read: boolean;
};

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Carrega as notificações do localStorage
    const stored = localStorage.getItem("notifications");
    console.log(stored);
    if (stored) {
      setNotifications(JSON.parse(stored));
    } else {
      const mock = [
        { id: 1, message: "Reunião amanha as 20", read: false },
        { id: 2, message: "Nova mensagem no chat", read: false },
        { id: 3, message: "atualização no mapa", read: false },
        { id: 4, message: "Reunião cancelada", read: false },
      ];
      console.log("No stored notifications");
      setNotifications(mock);
      localStorage.setItem("notifications", JSON.stringify(mock));
    }
  }, []);

  function markAsRead(id: number) {
    const updated = notifications.map((n) =>
      n.id === id ? { ...n, read: true } : n
    );
    setNotifications(updated);
    localStorage.setItem("notifications", JSON.stringify(updated));
  }

  return (
    <div className="bg-gray-800 text-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">Notificações</h2>
      {notifications.length === 0 ? (
        <p>Nenhuma notificação</p>
      ) : (
        <ul className="space-y-2">
          {notifications.map((n) => (
            <li
              key={n.id}
              className={`p-3 rounded flex justify-between items-center ${
                n.read ? "bg-gray-700 text-gray-400" : "bg-blue-600"
              }`}
            >
              <span>{n.message}</span>
              {!n.read && (
                <button
                  onClick={() => markAsRead(n.id)}
                  className="text-sm bg-black px-2 py-1 rounded hover:bg-gray-900"
                >
                  Marcar como lida
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
