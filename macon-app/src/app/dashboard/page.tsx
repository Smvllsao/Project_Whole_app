"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MeetingList from "@/app/components/MeetingList";
import Chat from "../components/chat";
import MapPlaceholder from "../components/MapPlaceholder";

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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Sair
        </button>
      </div>

      <section>
        <h2 className="text-lg font-semibold mb-2">Localização</h2>
        <MapPlaceholder />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Próximas Reuniões</h2>
        <MeetingList />
      </section>

      <section>
        <Chat />
      </section>
    </main>
  );
}
