import Container from "./common/container";
import Image from "next/image";
import Link from "next/link";
import { performRequest } from "@/lib/datocms"
import { serif_display } from "@/lib/fonts";

const WORKS_QUERY = `
  query Works {
    allWorks {
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

export default async function LatestWorks() {
  const { data: { allWorks } } = await performRequest({ query: WORKS_QUERY });

  return (
    <Container type="section" customClass="mt-14">
    <h2 className={`${serif_display.className} text-3xl`}>Latest works</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
      {allWorks.map((work, index) => {
        const { slug, title, mainImage: { responsiveImage } } = work
        return (
          <Link href={`/work/${slug}`} key={index}>
            <Image 
              alt={title} 
              sizes={responsiveImage.sizes} 
              src={responsiveImage.src} 
              width={responsiveImage.width} 
              height={responsiveImage.height}
              className="rounded-xl"
            />
          </Link>
        )
      })}
    </div>
    </Container>
  )
}