import { performRequest } from "@/lib/datocms";
import { serif_display } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { WORKS_QUERY } from "../utils/all-works";
import Container from "./common/container";
import { Button } from "./ui/button";

export default async function LatestWorks() {
  const {
    data: { allWorks },
  } = await performRequest({ query: WORKS_QUERY });

  return (
    <Container type="section">
      <h2
        className={`${serif_display.className} text-center text-2xl md:text-3xl`}
      >
        Latest works
      </h2>

      <div className="mt-5 flex justify-center">
        <Button asChild variant="rose">
          <Link href="/works">View all</Link>
        </Button>
      </div>

      <div className="mt-8 columns-1 gap-5 sm:columns-2 md:mt-14 md:columns-3 lg:columns-4">
        {allWorks.map((work, index) => {
          const {
            slug,
            title,
            mainImage: { responsiveImage, blurUpThumb },
          } = work;
          return (
            <Link href={`/work/${slug}`} key={index} className="mb-5 block">
              <Image
                alt={title}
                sizes={responsiveImage.sizes}
                src={responsiveImage.src}
                width={responsiveImage.width}
                height={responsiveImage.height}
                blurDataURL={blurUpThumb}
                placeholder="blur"
                className="h-auto max-w-full rounded-xl"
              />
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
