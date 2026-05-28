"use client";

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import {
  collection,
  query,
  orderBy,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "@/lib/firebase";

export interface Product {
  id?: string;
  name: string;
  description?: string;
  sizes?: string;
  material?: string;
  color?: string;
  style?: string;
  gsm?: string;
  features_text?: string;
  benefits?: string[];
  order?: number;
  is_active?: boolean;
  image_url?: string;
  second_image_url?: string;
  createdAt?: any;
  updatedAt?: any;
}

export async function loginAdmin(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function logoutAdmin() {
  return signOut(auth);
}

export function observeAdminAuth(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

const productsCollection = collection(db, "products");

export async function fetchProducts(): Promise<Product[]> {
  const q = query(productsCollection, orderBy("order", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  })) as Product[];
}

export async function fetchProductById(id: string): Promise<Product | null> {
  const refDoc = doc(db, "products", id);
  const snapshot = await getDoc(refDoc);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() } as Product;
}

export async function uploadImage(file: File): Promise<string> {
  if (!file) return "";
  const storageRef = ref(storage, `products/${Date.now()}-${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  await new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      () => {},
      (error) => reject(error),
      () => resolve(true),
    );
  });

  return getDownloadURL(uploadTask.snapshot.ref);
}

export async function saveProduct(product: Product, imageFile?: File, secondImageFile?: File) {
  const payload: Product = {
    name: product.name,
    description: product.description ?? "",
    sizes: product.sizes ?? "",
    material: product.material ?? "",
    color: product.color ?? "",
    style: product.style ?? "",
    gsm: product.gsm ?? "",
    features_text: product.features_text ?? "",
    benefits: product.benefits ?? [],
    order: product.order ?? 0,
    is_active: product.is_active ?? true,
    updatedAt: serverTimestamp(),
  };

  if (imageFile) {
    payload.image_url = await uploadImage(imageFile);
  }

  if (secondImageFile) {
    payload.second_image_url = await uploadImage(secondImageFile);
  }

  if (product.id) {
    const refDoc = doc(db, "products", product.id);
    await setDoc(refDoc, payload, { merge: true });
    return product.id;
  }

  const newDoc = await addDoc(productsCollection, {
    ...payload,
    createdAt: serverTimestamp(),
  });
  return newDoc.id;
}

export async function deleteProduct(id: string) {
  const refDoc = doc(db, "products", id);
  await deleteDoc(refDoc);
}
