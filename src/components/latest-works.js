import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import Link from "next/link";

import { performRequest } from "@/lib/datocms"

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
    <>
    <h2 className="text-center">Latest works</h2>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
              className="rounded-lg"
            />
          </Link>
        )
      })}
    </div>
    </>
  )
}