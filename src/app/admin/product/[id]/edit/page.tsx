"use client";

import { ProductForm } from "@/components/admin/ProductForm";
import { AdminShell } from "@/components/admin/AdminShell";
import { useParams } from "next/navigation";

export default function EditProductPage() {
  const params = useParams();
  const productId = params?.id as string | undefined;

  return (
    <AdminShell title="Edit Product">
      <ProductForm productId={productId} />
    </AdminShell>
  );
}
