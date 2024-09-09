import PageWrapper from "@/components/page-wrapper";

type Props = {};
const NewsPage = (props: Props) => {
  return (
    <PageWrapper>
      <section className=" md:pt-32 pt-20 md:pb-20 w-full flex flex-col justify-start gap-10 md:justify-evenly md:flex-row sm:text-lg lg:text-2xl pb-4">
        <h2>All News Page</h2>
      </section>
    </PageWrapper>
  );
};
export default NewsPage;
