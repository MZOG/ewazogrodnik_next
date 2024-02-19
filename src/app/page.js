import Container from "@/components/common/container";
import { performRequest } from "@/lib/datocms"

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
    <Container type="section" customClass="bg-rose-200 mt-1 rounded-lg pb-10 pt-[150px]">
      <p className="text-indigo-900">
        {title}
      </p>
    </Container>
  );
}
