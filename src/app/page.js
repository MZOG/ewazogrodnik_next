import Container from "@/components/common/container";
import { performRequest } from "@/lib/datocms"
import LatestWorks from "@/components/latest-works";
import { serif_display } from "@/lib/fonts";

const PAGE_CONTENT_QUERY = `
  query Home {
    homepage {
      title
    }
  }`;

export default async function Home() {
  const { data: { homepage } } = await performRequest({ query: PAGE_CONTENT_QUERY });

  const { title } = homepage;

  return (
    <>
    <Container type="section" customClass="py-8 md:py-14">
      <div className="flex justify-center">
        <h1 className={`text-3xl md:text-5xl md:leading-relaxed font-bold text-center ${serif_display.className} bg-gradient-to-r from-rose-400 to-rose-300 inline-block text-transparent bg-clip-text`}>
          {title}
        </h1>
      </div>
      {/* <p className="md:text-center mt-5 text-lg">Elo</p> */}
    </Container>
    <LatestWorks />
    </>
  );
}
