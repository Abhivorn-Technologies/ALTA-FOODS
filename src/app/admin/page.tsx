"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin, observeAdminAuth } from "@/lib/admin";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = observeAdminAuth((user) => {
      if (user) router.replace("/admin/dashboard");
    });
    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await loginAdmin(email, password);
      router.push("/admin/dashboard");
    } catch (err) {
      setError("Login failed. Please verify your email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md rounded-[2rem] bg-white px-8 py-10 shadow-2xl shadow-slate-200/80 sm:px-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">ALTA FOODS Admin</h1>
          <p className="mt-3 text-sm text-slate-500">Sign in with your Firebase admin account to manage products.</p>
        </div>

        {error ? <div className="mb-6 rounded-3xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Email</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              required
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:bg-white"
              placeholder="admin@example.com"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Password</span>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              required
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:bg-white"
              placeholder="••••••••"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-3xl bg-green-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-slate-500">
          <p>Admin access is powered by Firebase Authentication. Configure your admin user in the Firebase console.</p>
        </div>
      </div>
    </div>
  );
}
