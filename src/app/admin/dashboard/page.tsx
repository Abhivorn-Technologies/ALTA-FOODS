"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { fetchProducts, observeAdminAuth, type Product } from "@/lib/admin";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = observeAdminAuth((user) => {
      if (!user) router.replace("/admin");
    });

    fetchProducts()
      .then((data) => setProducts(data))
      .catch(() => setError("Unable to fetch products from Firestore."))
      .finally(() => setLoading(false));

    return () => unsubscribe();
  }, [router]);

  const productsCount = products.length;
  const activeCount = useMemo(() => products.filter((item) => item.is_active).length, [products]);

  return (
    <AdminShell title="Product Management">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Total Products</p>
          <p className="mt-4 text-4xl font-semibold text-slate-900">{productsCount}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Active Products</p>
          <p className="mt-4 text-4xl font-semibold text-emerald-600">{activeCount}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Firestore Status</p>
          <p className="mt-4 text-sm text-slate-500">Live database connected via Firebase Firestore</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Product Catalogue</h2>
          <button
            onClick={() => router.push("/admin/product/add")}
            className="inline-flex items-center justify-center rounded-3xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Add Product
          </button>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-4">Image</th>
                <th className="px-4 py-4">Name</th>
                <th className="px-4 py-4">Sizes</th>
                <th className="px-4 py-4">Order</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                    Loading products...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-red-600">{error}</td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-slate-500">
                    No products found. Create your first product using the Add Product button.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 align-top">
                      {product.image_url ? (
                        <img src={product.image_url} alt={product.name} className="h-14 w-14 rounded-2xl object-cover" />
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">No image</div>
                      )}
                    </td>
                    <td className="p-4 align-top font-semibold text-slate-900">{product.name}</td>
                    <td className="p-4 align-top text-slate-600">{product.sizes ?? "-"}</td>
                    <td className="p-4 align-top text-slate-600">{product.order ?? 0}</td>
                    <td className="p-4 align-top">
                      {product.is_active ? (
                        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                          Inactive
                        </span>
                      )}
                    </td>
                    <td className="p-4 align-top text-center">
                      <div className="inline-flex gap-2">
                        <button
                          onClick={() => router.push(`/admin/product/${product.id}/edit`)}
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-600 transition hover:border-green-500 hover:bg-green-50 hover:text-green-700"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => router.push(`/admin/product/${product.id}/delete`)}
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-600 transition hover:border-red-500 hover:bg-red-50 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
