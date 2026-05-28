"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { deleteProduct, fetchProductById, type Product } from "@/lib/admin";

export default function DeleteProductPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params?.id as string | undefined;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;
    fetchProductById(productId)
      .then((data) => setProduct(data))
      .catch(() => setError("Unable to load the product."))
      .finally(() => setLoading(false));
  }, [productId]);

  const handleDelete = async () => {
    if (!productId) return;

    setDeleting(true);
    setError(null);

    try {
      await deleteProduct(productId);
      router.push("/admin/dashboard");
    } catch {
      setError("Unable to delete the product. Try again.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <AdminShell title="Delete Product">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-red-100 bg-white p-8 shadow-xl shadow-red-100/40">
        {loading ? (
          <p className="text-sm text-slate-500">Loading product details…</p>
        ) : error ? (
          <div className="rounded-3xl border border-red-100 bg-red-50 p-5 text-sm text-red-700">{error}</div>
        ) : (
          <>
            <div className="mb-6 flex items-center gap-4 rounded-3xl bg-red-50 p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-700">!</div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">Permanent Action</p>
                <h2 className="text-2xl font-semibold text-slate-900">Delete Product?</h2>
              </div>
            </div>
            <p className="mb-6 text-slate-600">
              Are you sure you want to delete <span className="font-semibold text-slate-900">"{product?.name}"</span> from Firestore? This cannot be undone.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="rounded-3xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {deleting ? "Deleting…" : "Delete Permanently"}
              </button>
              <button
                onClick={() => router.push("/admin/dashboard")}
                className="rounded-3xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </AdminShell>
  );
}
