import Container from "@/components/common/container";
import { performRequest } from "@/lib/datocms"
import Image from "next/image";
import { serif_display } from "@/lib/fonts";

const PARAMS_QUERY = `
  query AllWorks {
    allWorks {
      slug
    }
  }`;

export async function generateStaticParams() {
  const { data: { allWorks } } = await performRequest({ query: PARAMS_QUERY});
  return allWorks?.map(({ slug }) => slug);
}

const WORK_QUERY = `
  query Work($slug: String) {
    work(filter: {slug: {eq: $slug}})  {
      title
      slug
      mainImage {
        responsiveImage {
          src
          height
          width
        }
      }
    }
  }`;

function getPageRequest(slug) {
  return { query: WORK_QUERY, variables: { slug } };
}
  
export async function generateMetadata({ params }) {
  const { data: { work } } = await performRequest(getPageRequest(params.slug))

  return {
    title: work.title,
    slug: work.slug
  }
}

export default async function Work({ params }) {
  const { slug } = params;
  const { data: { work } } = await performRequest(getPageRequest(slug))
  const { title } = work

  return (
    <Container type="section" customClass="flex flex-col items-center gap-10 justify-center">
      <h1 className={`${serif_display.className} text-5xl`}>{ title }</h1>
      <Image 
          alt={title} 
          sizes={work.mainImage.responsiveImage.sizes} 
          src={work.mainImage.responsiveImage.src} 
          width={work.mainImage.responsiveImage.width} 
          height={work.mainImage.responsiveImage.height}
          className="rounded-xl max-w-2xl mx-auto w-full"
        />
    </Container>
  )
}