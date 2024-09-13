import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[70rem] mx-auto min-h-screen px-20">
      <section className=" pt-20 md:pb-20 w-full h-screen flex flex-col justify-center items-center gap-10 sm:text-lg lg:text-2xl pb-4">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Daily News</h1>
            <p className="text-xl text-gray-400">
              Your source for the latest updates
            </p>
          </header>

          <main className="mb-8 text-center">
            <p className="mb-4">
              Welcome to our news portal. Here you{`'`}ll find the most recent
              and relevant news from around the world. Our team of dedicated
              journalists works tirelessly to bring you accurate and timely
              information on a wide range of topics.
            </p>
            <p className="mb-4">
              From politics and economics to science and technology, we cover it
              all. Stay informed with our comprehensive coverage and in-depth
              analysis of current events.
            </p>
            <p>
              Check back regularly for updates, or visit our full news section
              for more stories.
            </p>
          </main>

          <div className="text-center">
            <Link
              href="/news"
              className="inline-block bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
