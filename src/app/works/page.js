import Container from "@/components/common/container";
import { performRequest } from "@/lib/datocms";
import { serif_display } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { WORKS_PAGE_QUERY } from "@/utils/all-works";

export default async function Works() {
  const {
    data: { allWorks },
  } = await performRequest({ query: WORKS_PAGE_QUERY });

  return (
    <Container type="section">
      <h1 className={`${serif_display.className} text-center text-3xl`}>
        All works
      </h1>

      <div className="mt-14 columns-1 gap-5 sm:columns-2 md:columns-3 lg:columns-4">
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
