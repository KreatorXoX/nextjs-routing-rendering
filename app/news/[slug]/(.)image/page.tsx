"use client";

import { DUMMY_NEWS } from "@/dummy-data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};
export default function InterceptedImagePage({ params }: Props) {
  const { slug } = params;

  const foundNew = DUMMY_NEWS.find((singleNew) => singleNew.slug === slug);

  if (!foundNew) {
    notFound();
  }
  const router = useRouter();
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center h-full w-full" />
      <dialog
        open
        className="rounded-md border-none w-full max-w-[50rem] h-[60rem] flex items-center justify-center pt-20 bg-transparent"
      >
        <div className="relative h-[40rem] w-full">
          <Image
            src={`/images/news/${foundNew.image}`}
            alt={foundNew.title}
            fill
            sizes="(min-width: 640px) 640px, 100vw"
            style={{ objectFit: "contain" }}
          />
        </div>
      </dialog>
    </>
  );
}
