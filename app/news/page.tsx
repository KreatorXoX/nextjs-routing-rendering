import NewItem from "@/components/News/NewItem";
import PageWrapper from "@/components/page-wrapper";
import { DUMMY_NEWS } from "@/dummy-data";

const NewsPage = () => {
  return (
    <PageWrapper>
      <section className=" md:pt-32 pt-20 md:pb-20 w-full flex flex-col items-center justify-center gap-10 sm:text-lg lg:text-2xl pb-4">
        <h2>All News Page</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {DUMMY_NEWS.map((singleNew) => (
            <NewItem key={singleNew.id} dummyNew={singleNew} />
          ))}
        </ul>
      </section>
    </PageWrapper>
  );
};

export default NewsPage;
