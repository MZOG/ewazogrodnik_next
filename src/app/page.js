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
      <Container type="section" customClass="py-8 md:py-14">
        <div className="flex justify-center">
          <h1
            className={`text-center text-3xl font-bold md:text-5xl md:leading-relaxed ${serif_display.className} inline-block bg-gradient-to-r from-rose-400 to-rose-300 bg-clip-text text-transparent`}
          >
            {title}
          </h1>
        </div>
        {/* <p className="md:text-center mt-5 text-lg">Elo</p> */}
      </Container>
      <LatestWorks />
    </>
  );
}
