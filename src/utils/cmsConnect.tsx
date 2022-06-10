import { gql, GraphQLClient } from 'graphql-request';

type VariablesObject = {
  pageSlug: string | string[] | undefined;
};

export const cmsConnect = async (query: string, variables?: VariablesObject) => {
  const url = process.env.REACT_APP_ENDPOINT ?? '123';
  const client = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.REACT_APP_GRAPH_CMS_TOKEN ?? '123',
    },
  });
  return client.request(query, variables);
};
