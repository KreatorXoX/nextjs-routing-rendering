import React from "react";
import Image from "next/image";
import { DummyNew } from "@/types";
import Link from "next/link";

type Props = {
  dummyNew: DummyNew;
};

const NewItem = ({ dummyNew }: Props) => {
  return (
    <li>
      <Link href={`/news/${dummyNew.slug}`} as={""}>
        <article
          key={dummyNew.id}
          className="cursor-pointer flex flex-col justify-between h-full"
        >
          <header className="p-0">
            <div className="relative w-full pt-[56.25%]">
              <Image
                src={`/images/news/${dummyNew.image}`}
                alt={dummyNew.title}
                fill
                className="rounded-t-lg"
                priority
                sizes="(min-width: 640px) 640px, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </header>
          <div className="flex flex-col w-full bg-transparent justify-between gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                {dummyNew.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {dummyNew.content}
              </p>
            </div>

            <p className="text-xs text-gray-500">{dummyNew.date}</p>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default NewItem;
