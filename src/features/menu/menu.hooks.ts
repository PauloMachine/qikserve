import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { TMenu } from "./menu.types";
import { getMenu } from "./menu.services";

export const useGetMenu = () => {
  return useQuery<TMenu, Error>({
    queryKey: ["menu"],
    queryFn: () => getMenu(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    onError: () => {
      console.error("An error occurred during get menu");
    },
  } as UseQueryOptions<TMenu, Error, TMenu>);
};
