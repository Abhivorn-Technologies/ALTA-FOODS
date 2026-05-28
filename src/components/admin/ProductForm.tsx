"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchProductById, saveProduct, type Product } from "@/lib/admin";

interface ProductFormProps {
  productId?: string;
}

const emptyProduct: Product = {
  name: "",
  description: "",
  sizes: "",
  material: "",
  color: "",
  style: "",
  gsm: "",
  features_text: "",
  benefits: [],
  order: 0,
  is_active: true,
};

export function ProductForm({ productId }: ProductFormProps) {
  const router = useRouter();
  const [product, setProduct] = useState<Product>(emptyProduct);
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [secondImage, setSecondImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;

    setLoading(true);
    fetchProductById(productId)
      .then((data) => {
        if (data) {
          setProduct({
            ...emptyProduct,
            ...data,
            benefits: Array.isArray(data.benefits) ? data.benefits : (data.benefits ? String(data.benefits).split("\n") : []),
          });
        }
      })
      .catch(() => setError("Unable to load product details."))
      .finally(() => setLoading(false));
  }, [productId]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setError(null);

    if (!product.name.trim()) {
      setError("Product name is required.");
      setSaving(false);
      return;
    }

    try {
      await saveProduct(
        {
          ...product,
          benefits: product.benefits?.map((item) => item.trim()).filter(Boolean) ?? [],
          order: Number(product.order ?? 0),
        },
        mainImage ?? undefined,
        secondImage ?? undefined,
      );

      router.push("/admin/dashboard");
    } catch (exception) {
      console.error("Product save failed:", exception);
      const message =
        exception instanceof Error
          ? exception.message
          : typeof exception === "string"
          ? exception
          : "Unable to save the product. Please try again.";
      setError(message);
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (field: keyof Product, value: string | boolean | string[]) => {
    setProduct((current) => ({
      ...current,
      [field]: value,
    }));
  };

  return (
    <div className="glass rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/40">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{productId ? "Edit Product" : "Add New Product"}</h2>
          <p className="mt-2 text-sm text-slate-500">
            Use this form to manage your Firestore product item directly from the admin dashboard.
          </p>
        </div>
      </div>

      {error ? <div className="mb-6 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Product Name *</span>
            <input
              value={product.name}
              onChange={(event) => handleChange("name", event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:bg-white"
              placeholder="Enter product name"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Display Order</span>
            <input
              type="number"
              value={product.order}
              onChange={(event) => handleChange("order", event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:bg-white"
              min={0}
            />
          </label>
        </div>

        <div>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Description</span>
            <textarea
              value={product.description}
              onChange={(event) => handleChange("description", event.target.value)}
              rows={4}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:bg-white"
              placeholder="Enter product description"
            />
          </label>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Sizes</span>
            <input
              value={product.sizes}
              onChange={(event) => handleChange("sizes", event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:bg-white"
              placeholder="Small, Medium, Large"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Material</span>
            <input
              value={product.material}
              onChange={(event) => handleChange("material", event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:bg-white"
              placeholder="e.g. Organic Cotton"
            />
          </label>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Color</span>
            <input
              value={product.color}
              onChange={(event) => handleChange("color", event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:bg-white"
              placeholder="e.g. Forest Green"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Style</span>
            <input
              value={product.style}
              onChange={(event) => handleChange("style", event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:bg-white"
              placeholder="e.g. Casual Fit"
            />
          </label>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">GSM</span>
            <input
              value={product.gsm}
              onChange={(event) => handleChange("gsm", event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:bg-white"
              placeholder="e.g. 180 GSM"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Features</span>
            <input
              value={product.features_text}
              onChange={(event) => handleChange("features_text", event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:bg-white"
              placeholder="Key design components"
            />
          </label>
        </div>

        <div>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Benefits (one per line)</span>
            <textarea
              value={product.benefits?.join("\n") ?? ""}
              onChange={(event) => handleChange("benefits", event.target.value.split("\n"))}
              rows={4}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:bg-white"
              placeholder="Enter each benefit on a new line"
            />
          </label>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Main Product Image File</span>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setMainImage(event.target.files?.[0] ?? null)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition file:mr-4 file:rounded-3xl file:border-0 file:bg-slate-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-700"
            />
            {product.image_url ? (
              <p className="mt-2 text-xs text-slate-500">Current image already uploaded.</p>
            ) : null}
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Second Product Image File</span>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setSecondImage(event.target.files?.[0] ?? null)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition file:mr-4 file:rounded-3xl file:border-0 file:bg-slate-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-700"
            />
            {product.second_image_url ? (
              <p className="mt-2 text-xs text-slate-500">Current second image already uploaded.</p>
            ) : null}
          </label>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 lg:flex-row lg:items-center lg:justify-between">
          <label className="flex items-center gap-3 text-sm font-semibold text-slate-700">
            <input
              type="checkbox"
              checked={Boolean(product.is_active)}
              onChange={(event) => handleChange("is_active", event.target.checked)}
              className="h-5 w-5 rounded border-slate-300 text-green-600 focus:ring-2 focus:ring-green-500"
            />
            Is Product Active?
          </label>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={saving}
              className="rounded-3xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {saving ? "Saving..." : productId ? "Update Product" : "Create Product"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/admin/dashboard")}
              className="rounded-3xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
