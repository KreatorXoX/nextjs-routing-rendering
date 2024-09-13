import NewsList from "@/components/News/NewsList";
import PageWrapper from "@/components/page-wrapper";
import { DUMMY_NEWS } from "@/dummy-data";

const NewsPage = () => {
  return (
    <PageWrapper>
      <section className=" md:pt-32 pt-20 md:pb-20 w-full flex flex-col items-center justify-center gap-10 sm:text-lg lg:text-2xl pb-4">
        <h2>All News Page</h2>
        <NewsList news={DUMMY_NEWS} />
      </section>
    </PageWrapper>
  );
};

export default NewsPage;
