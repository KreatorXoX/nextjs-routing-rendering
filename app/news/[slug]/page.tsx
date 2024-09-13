import Image from "next/image";
import PageWrapper from "@/components/page-wrapper";
import { DUMMY_NEWS } from "@/dummy-data";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};
const NewsDetailPage = ({ params }: Props) => {
  const foundNew = DUMMY_NEWS.find(
    (singleNew) => singleNew.slug === params.slug
  );
  if (!foundNew) {
    notFound();
  }
  return (
    <PageWrapper>
      <section className=" md:pt-32 pt-20 md:pb-20 w-full flex flex-col justify-start gap-10 md:justify-evenly md:flex-row sm:text-lg lg:text-2xl pb-4">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {foundNew!.title}
            </h1>
            <p className="text-gray-600 mb-4">{foundNew.date}</p>
            <div className="relative w-full h-64 md:h-96 mb-6">
              <Link href={`/news/${params.slug}/image`}>
                <Image
                  priority
                  src={`/images/news/${foundNew.image}`}
                  alt={foundNew.title}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                  sizes="(min-width: 640px) 640px, 100vw"
                />
              </Link>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-8">
            {foundNew.content}
          </div>
        </article>
      </section>
    </PageWrapper>
  );
};
export default NewsDetailPage;
