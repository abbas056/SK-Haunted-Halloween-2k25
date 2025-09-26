import { useQuery } from "@tanstack/react-query";
import { fetchEventInfo } from "../api/userApi";

// Event Info Query
export const useOverallQuery = (userId) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["eventInfo"],
    queryFn: () => fetchEventInfo(userId),
    enabled: !!userId,
  });

  return {
    eventInfo: data,
    isLoading,
    refetch,
  };
};
