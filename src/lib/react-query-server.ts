import React from "react";
import { dehydrate, QueryClient, type FetchQueryOptions } from "@tanstack/react-query";

const getServerQueryClient = React.cache(() => new QueryClient());


/**
 * This functions enable prefetching and de/hydrating data into consuming page/component.
 * We can prefetch multiple requests as well.
 */
export async function prefetchQueries(fetchPromises: FetchQueryOptions[]) {
  const serverQueryClient = getServerQueryClient();

  if (!!fetchPromises.length) {
    await Promise.all([
      ...fetchPromises.map((p) => {
        return serverQueryClient.prefetchQuery(p);
      }),
    ]);
  }

  const dehydratedState = dehydrate(serverQueryClient);

  return dehydratedState;
}
