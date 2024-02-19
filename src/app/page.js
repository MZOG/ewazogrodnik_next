import Container from "@/components/common/container";
import { performRequest } from "@/lib/datocms"
import LatestWorks from "@/components/latest-works";

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
    <Container type="section" customClass="bg-rose-200 rounded-xl p-10">
      <p>
        {title}
      </p>
    </Container>
    <LatestWorks />
    </>
  );
}
