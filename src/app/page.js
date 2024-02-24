import Container from "@/components/common/container";
import { performRequest } from "@/lib/datocms";
import LatestWorks from "@/components/latest-works";
import { serif_display } from "@/lib/fonts";
import { PAGE_CONTENT_QUERY } from "@/utils/homepage";

export default async function Home() {
  const {
    data: { homepage },
  } = await performRequest({ query: PAGE_CONTENT_QUERY });

  const { title } = homepage;

  return (
    <>
      <Container type="section" customClass="py-8 md:py-10">
        <div className="flex flex-col justify-center gap-2">
          <h1
            className={`text-center text-4xl font-bold md:text-5xl md:leading-relaxed ${serif_display.className} inline-block bg-gradient-to-r from-rose-400 to-rose-300 bg-clip-text text-transparent`}
          >
            {title}
          </h1>
          <p className="mx-auto text-center md:max-w-md md:text-lg">
            Here, you&apos;ll find a collection of handmade crochet doilies that
            are perfect for adding a touch of elegance and sophistication to
            your home
          </p>
        </div>
      </Container>
      <LatestWorks />
    </>
  );
}
