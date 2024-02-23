const WORKS_QUERY = `
  query Works {
    allWorks(first: "8", orderBy: _createdAt_DESC) {
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

const WORKS_PAGE_QUERY = `
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

export { WORKS_QUERY, WORKS_PAGE_QUERY };
