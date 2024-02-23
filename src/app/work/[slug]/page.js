import Container from "@/components/common/container";
import { performRequest } from "@/lib/datocms";
import Image from "next/image";
import { serif_display } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { GENERATE_SLUG_QUERY, WORK_ITEM_QUERY } from "@/utils/single-work";

export async function generateStaticParams() {
  const {
    data: { allWorks },
  } = await performRequest({ query: GENERATE_SLUG_QUERY });
  return allWorks?.map(({ slug }) => slug);
}

function getPageRequest(slug) {
  return { query: WORK_ITEM_QUERY, variables: { slug } };
}

export async function generateMetadata({ params }) {
  const {
    data: { work },
  } = await performRequest(getPageRequest(params.slug));
  const { title, slug } = work;
  return {
    title: title,
    slug: slug,
  };
}

export default async function Work({ params }) {
  const { slug } = params;
  const {
    data: { work },
  } = await performRequest(getPageRequest(slug));
  const {
    title,
    shortDescription,
    sizes,
    color,
    availability,
    isCircle,
    price,
  } = work;

  return (
    <Container
      type="section"
      maxWidth="max-w-4xl"
      customClass="grid md:grid-cols-2 gap-5 md:gap-10 mt-10"
    >
      <Image
        alt={title}
        sizes={work.mainImage.responsiveImage.sizes}
        src={work.mainImage.responsiveImage.src}
        width={work.mainImage.responsiveImage.width}
        height={work.mainImage.responsiveImage.height}
        className="mx-auto w-full max-w-2xl rounded-xl"
        blurDataURL={work.mainImage.blurUpThumb}
        placeholder="blur"
      />
      <aside>
        <h1 className={`${serif_display.className} text-5xl`}>{title}</h1>
        <p className="text-primary/50 mt-2 text-sm">
          SKU: <span>#{slug}</span>
        </p>
        {shortDescription && (
          <div className="mt-5">
            <p className="font-medium">Description</p>
            <p>{shortDescription}</p>
          </div>
        )}
        {price && (
          <div className="mt-5">
            <p className="font-medium">
              Price: <span className="block font-normal">£{price}</span>
            </p>
          </div>
        )}
        {availability && (
          <div className="mt-5">
            <p className="font-medium">
              Available items:{" "}
              <span className="block font-normal">{availability}</span>
            </p>
          </div>
        )}
        {sizes && (
          <div className="mt-5">
            <p className="font-medium">
              Sizes:{" "}
              <span className="block font-normal">
                {isCircle && "Ø"} {sizes} cm
              </span>
            </p>
          </div>
        )}
        {color && (
          <div className="mt-5">
            <p className="font-medium">
              Color: <span className="block font-normal">{color}</span>
            </p>
          </div>
        )}

        <Button asChild variant="rose" className="mt-5">
          <a
            href="https://www.facebook.com/messages/t/100024651574829"
            target="_blank"
          >
            Buy now
          </a>
        </Button>
        <p className="mt-2 text-sm">Please provide item number</p>
      </aside>
    </Container>
  );
}
