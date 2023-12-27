import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/services/core";
import { queryKeys } from "@/lib/query-keys";

export const useGetProducts = () => {
  // Get products data
  const query = useQuery({
    queryKey: [queryKeys.products],
    queryFn: getProducts,
  });

  return query;
};
