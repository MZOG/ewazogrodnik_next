const GENERATE_SLUG_QUERY = `
  query AllWorks {
    allWorks {
      slug
    }
  }`;

const WORK_ITEM_QUERY = `
  query Work($slug: String) {
    work(filter: {slug: {eq: $slug}})  {
      title
      slug
      shortDescription
      availability
      sizes
      price
      color
      isCircle
      gallery {
        responsiveImage {
          width
          src
          height
        }
      }
      mainImage {
        responsiveImage {
          src
          height
          width
        }
        blurUpThumb
      }
    }
  }`;

export { GENERATE_SLUG_QUERY, WORK_ITEM_QUERY };
