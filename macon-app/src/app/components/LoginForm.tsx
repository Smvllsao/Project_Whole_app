"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [codigo, setCodigo] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Simula o login — mais pra frente, você coloca validação real aqui
    if (email && senha && codigo) {
      router.push("/dashboard");
    } else {
      alert("Preencha todos os campos!");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
    >
      <h2 className="text-xl font-bold">Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="text"
        placeholder="Código pessoal"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition"
      >
        Entrar
      </button>
    </form>
  );
}
