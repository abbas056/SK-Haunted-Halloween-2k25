import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchEventRecordsTab3, fetchTalentGameTab3, fetchWinnersDataTab3 } from "../api/tab3Api";

// Talent Game Tab 3
export const useTalentGameTab3 = () => {
  const queryClient = useQueryClient();
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationFn: ({ playCount, requestHeader }) => fetchTalentGameTab3(playCount, requestHeader),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["talentGameTab3"] });
      // Refetching the Query after the game Update
      queryClient.invalidateQueries({ queryKey: ["winnersDataTab3"] });
      // queryClient.invalidateQueries({ queryKey: ["eventInfo"] });
      // The Component is unmounted, so need to remove the cached data
      queryClient.removeQueries({ queryKey: ["eventRecordsTab3"] });
    },
  });
  return {
    mutate,
    data,
    isLoading: isPending,
    isError,
    error,
  };
};

// Event Records Tab 3 Query
export const useEventRecordsTab3 = (userId, pageNumber = 1) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["eventRecordsTab3", userId, pageNumber],
    queryFn: () => fetchEventRecordsTab3(userId, pageNumber),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

// Event Winners Tab 3 Query
export const useWinnersDataTab3 = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["winnersDataTab3"],
    queryFn: () => fetchWinnersDataTab3(),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
