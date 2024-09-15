import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};
export default async function InterceptedImagePage({ params }: Props) {
  const { slug } = params;

  const dbNew = await getNewsItem(slug);

  if (!dbNew) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog
        open
        className="absolute inset-0 w-full max-w-[35rem] h-screen max-h-[40rem] z-[35] flex items-center justify-center p-5 bg-yellow-500 rounded-md"
      >
        <div className="relative h-full w-full bg-white rounded-md">
          <Image
            src={`/images/news/${dbNew.image}`}
            alt={dbNew.title}
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
