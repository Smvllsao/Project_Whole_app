"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import MeetingList from "@/app/components/MeetingList";
import Chat from "../components/chat";
import MapPlaceholder from "../components/MapPlaceholder";
import Notifications from "../components/Notifications";

export default function DashboardPage() {
  const router = useRouter();

  function logout() {
    localStorage.removeItem("loggedIn");
    router.push("/login");
  }

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn) {
      router.push("/login");
    }
  }, [router]);

  return (
    <main className="p-6 space-y-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
            Nova Reuniao
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
            Perfil
          </button>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Sair
          </button>
        </div>
      </header>

      <section className="mb-6">
        <Notifications />
      </section>

      <section className="mb-6">
        <MeetingList />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Localização</h2>
        <MapPlaceholder />
      </section>

      <section>
        <Chat />
      </section>
    </main>
  );
}
