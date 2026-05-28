"use client";

import { ProductForm } from "@/components/admin/ProductForm";
import { AdminShell } from "@/components/admin/AdminShell";

export default function AddProductPage() {
  return (
    <AdminShell title="Add Product">
      <ProductForm />
    </AdminShell>
  );
}
