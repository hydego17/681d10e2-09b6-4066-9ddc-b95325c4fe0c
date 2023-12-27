import { HydrationBoundary } from "@tanstack/react-query";

import { getProducts } from "@/services/core";
import { queryKeys } from "@/lib/query-keys";
import { prefetchQueries } from "@/lib/react-query-server";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const dehydratedState = await prefetchQueries([
    {
      queryKey: [queryKeys.products],
      queryFn: getProducts,
    },
  ]);

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
}
