import { gql, GraphQLClient } from "graphql-request";

const storefrontAccessToken = process.env.STOREFRONTACCESSTOKEN;
const endpoint = process.env.SHOPURL;

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken
    },
});

export async function getProducts() {
    const getAllProductsQuery = gql`
        products(first: 10) {
            edges {
                node {
                    id
                    title
                    handle
                    priceRange {
                        minVariantPrice {
                            amount
                        }
                    }
                    featuredImage {
                        altText
                        url
                    }
                }
            }
        }
    `;

    try {
        return await graphQLClient.request(getAllProductsQuery);
    } catch (error) {
        throw new Error(error)
    }
}

export const getProduct = async (id) => {
    const productQuery = gql`
        product(id: $id) {
            id
            handle
            title
            description
            priceRange {
                minVariantPrice {
                    amount
                    currencyCode
                }
            }
            featuredImage {
                altText
                url
            }
            variants(first: 10) {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    `

    const variables = {
        id
    }

    try {
        const data = await graphQLClient(productQuery, variables);
        return data.product;
    } catch (error) {
        throw new Error(error);
    }
 }