import { DUMMY_NEWS } from "@/dummy-data";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};
export default function ImagePage({ params }: Props) {
  const { slug } = params;

  const foundNew = DUMMY_NEWS.find((singleNew) => singleNew.slug === slug);

  if (!foundNew) {
    notFound();
  }

  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[40rem] h-screen max-h-[50rem] relative flex items-center justify-center">
          <Image
            src={`/images/news/${foundNew.image}`}
            alt={foundNew.title}
            fill
            sizes="(min-width: 640px) 640px, 100vw"
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
