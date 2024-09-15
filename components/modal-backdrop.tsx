"use client";

import { useRouter } from "next/navigation";

export default function ModalBackdrop() {
  const router = useRouter();
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center h-screen w-full z-30"
      onClick={() => router.back()}
    />
  );
}
