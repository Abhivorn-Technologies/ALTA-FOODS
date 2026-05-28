"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { logoutAdmin, observeAdminAuth } from "@/lib/admin";

export function AdminShell({ title, children }: { title: string; children: React.ReactNode }) {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = observeAdminAuth((user) => {
      if (!user) {
        router.replace("/admin");
        return;
      }
      setUserEmail(user.email ?? null);
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Admin Dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">{title}</h1>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {userEmail ? <span className="rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-700">Signed in as {userEmail}</span> : null}
            <button
              onClick={async () => {
                await logoutAdmin();
                router.replace("/admin");
              }}
              className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
