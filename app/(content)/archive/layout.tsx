import PageWrapper from "@/components/page-wrapper";
import { Suspense } from "react";

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
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center w-full h-full pt-[10%]">
              <h2 className="text-4xl italic">Loading the archive</h2>
            </div>
          }
        >
          <section className="w-full border-b-2 border-b-gray-200 pb-10">
            <div className="px-3 py-2 ">{archive}</div>
          </section>
          <section className="w-full">
            <div className="px-3 py-2">{latest}</div>
          </section>
        </Suspense>
      </div>
    </PageWrapper>
  );
}
