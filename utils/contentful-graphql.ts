// /src/_lib/contentful-graphql.ts

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
const headers = {
  Authorization: `Bearer ${TOKEN}`,
  'Content-Type': 'application/json'
}

const contentfulGQLClient = {
  query: ({ query, variables = undefined }: { query: string, variables?: Record<string, string> }) => {
    return fetch(URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 }
    }, )
  }
}

export default contentfulGQLClient