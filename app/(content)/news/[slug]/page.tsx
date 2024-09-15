import Image from "next/image";
import PageWrapper from "@/components/page-wrapper";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/lib/news";

type Props = {
  params: {
    slug: string;
  };
};
const NewsDetailPage = async ({ params }: Props) => {
  const dbNew = await getNewsItem(params.slug);

  if (!dbNew) {
    notFound();
  }
  return (
    <PageWrapper>
      <section className=" md:pt-32 pt-20 md:pb-20 w-full flex flex-col justify-start gap-10 md:justify-evenly md:flex-row sm:text-lg lg:text-2xl pb-4">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {dbNew!.title}
            </h1>
            <p className="text-gray-600 mb-4">{dbNew.date}</p>
            <div className="relative w-full h-64 md:h-96 mb-6">
              <Link href={`/news/${params.slug}/image`}>
                <Image
                  priority
                  src={`/images/news/${dbNew.image}`}
                  alt={dbNew.title}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                  sizes="(min-width: 640px) 640px, 100vw"
                />
              </Link>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-8">{dbNew.content}</div>
        </article>
      </section>
    </PageWrapper>
  );
};
export default NewsDetailPage;
