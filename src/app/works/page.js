import Container from "@/components/common/container";
import { performRequest } from "@/lib/datocms"
import { serif_display } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

const WORKS_QUERY = `
  query Works {
    allWorks(first: "100", orderBy: _createdAt_DESC) {
      title
      slug
      mainImage {
        responsiveImage {
          src
          width
          height
        }
        blurUpThumb
      }
    }
  }`;

export default async function Works() {
  const { data: { allWorks } } = await performRequest({ query: WORKS_QUERY });

  return (
    <Container type="section">
      <h1 className={`${serif_display.className} text-3xl text-center`}>All works</h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 mt-14">
      {allWorks.map((work, index) => {
        const { slug, title, mainImage: { responsiveImage, blurUpThumb } } = work
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
              className="rounded-xl h-auto max-w-full"
            />
          </Link>
        )
      })}
    </div>
    </Container>
  )
}