import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { getVenue } from "./venue.services";
import type { IVenue } from "./venue.types";

export const useGetVenue = (id: number) => {
  return useQuery<IVenue, Error>({
    queryKey: ["venue"],
    queryFn: () => getVenue(id),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    onError: () => {
      console.error("An error occurred during get venue");
    },
  } as UseQueryOptions<IVenue, Error, IVenue>);
};
