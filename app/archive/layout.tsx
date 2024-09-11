import PageWrapper from "@/components/page-wrapper";

export default function ArchiveLayout({
  archive,
  latest,
}: Readonly<{
  archive: React.ReactNode;
  latest: React.ReactNode;
}>) {
  return (
    <PageWrapper>
      <div className="pt-20 min-h-screen md:pb-20 w-full flex flex-col items-start gap-10 sm:text-lg lg:text-2xl pb-4">
        <h1 className="text-center w-full text-2xl">News Archive</h1>
        <section className="w-full border-b-2 border-b-gray-200 pb-10">
          <div className="px-3 py-2 bg-red-500">{archive}</div>
        </section>
        <section className="w-full">
          <div className="px-3 py-2">{latest}</div>
        </section>
      </div>
    </PageWrapper>
  );
}
