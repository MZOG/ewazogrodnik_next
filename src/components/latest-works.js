import { performRequest } from "@/lib/datocms";
import { serif_display } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { WORKS_QUERY } from "../utils/all-works";
import Container from "./common/container";
import { Button } from "./ui/button";
import Marquee from "react-fast-marquee";

export default async function LatestWorks() {
  const {
    data: { allWorks },
  } = await performRequest({ query: WORKS_QUERY });

  return (
    <>
      <Marquee speed={70} pauseOnHover={true}>
        {allWorks.map((work, index) => {
          const {
            slug,
            title,
            mainImage: { responsiveImage, blurUpThumb },
          } = work;
          return (
            <Link
              href={`/work/${slug}`}
              key={index}
              className="mx-3 block w-full"
            >
              <Image
                alt={title}
                sizes={responsiveImage.sizes}
                src={responsiveImage.src}
                width={300}
                height={responsiveImage.height}
                blurDataURL={blurUpThumb}
                placeholder="blur"
                className="h-auto max-w-full rounded-xl"
              />
            </Link>
          );
        })}
      </Marquee>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="rose">
          <Link href="/works">View all</Link>
        </Button>
      </div>
    </>
  );
}
