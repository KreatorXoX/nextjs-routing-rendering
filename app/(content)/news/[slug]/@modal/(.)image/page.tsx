"use client";
import { DUMMY_NEWS } from "@/dummy-data";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};
export default function InterceptedImagePage({ params }: Props) {
  const router = useRouter();

  const { slug } = params;

  const foundNew = DUMMY_NEWS.find((singleNew) => singleNew.slug === slug);

  if (!foundNew) {
    notFound();
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center h-screen w-full z-30"
        onClick={() => router.back()}
      />

      <dialog
        onClick={() => router.back()}
        open
        className="absolute inset-0 w-full max-w-[35rem] h-screen max-h-[40rem] z-[35] flex items-center justify-center p-5 bg-yellow-500 rounded-md"
      >
        <div className="relative h-full w-full bg-white rounded-md">
          <Image
            src={`/images/news/${foundNew.image}`}
            alt={foundNew.title}
            fill
            sizes="(min-width: 640px) 640px, 100vw"
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </dialog>
    </>
  );
}
