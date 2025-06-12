// src/app/login/page.tsx
"use client";

import LoginForm from "@/app/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100 ">
      <LoginForm />
    </main>
  );
}
