import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchEventRecordsTab1,
  fetchRechargeRecordsTab1,
  fetchWinnersDataTab1,
  fetchLeaderboardTodayTab1,
  fetchLeaderboardPreviousDayTab1,
  fetchUserGameTab1,
  fetchClaimChestTab1,
} from "../api/tab1Api";

// User Game Query
export const useUserGameTab1 = () => {
  const queryClient = useQueryClient();
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationFn: ({ playCount, requestHeader }) => fetchUserGameTab1(playCount, requestHeader),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userGameTab1"] });
      // Refetching the Query after the game Update
      queryClient.invalidateQueries({ queryKey: ["winnersDataTab1"] });
      queryClient.invalidateQueries({ queryKey: ["leaderboardTodayTab1"] });
      queryClient.invalidateQueries({ queryKey: ["eventInfo"] });
      // The Component is unmounted, so need to remove the cached data
      queryClient.removeQueries({ queryKey: ["eventRecordsTab1"] });
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

// Recharge Weapon Query
export const useClaimChestTab1 = () => {
  const queryClient = useQueryClient();
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationFn: (requestHeader) => fetchClaimChestTab1(requestHeader),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["claimChestTab1"] });
      queryClient.removeQueries({ queryKey: ["rechargeRecordsTab1"] });
      queryClient.invalidateQueries({ queryKey: ["eventInfo"] });
    },
  });
  return {
    mutate,
    data,
    isPending,
    isError,
    error,
  };
};

// Event Records Query
export const useEventRecordsTab1 = (userId, pageNumber = 1) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["eventRecordsTab1", userId, pageNumber],
    queryFn: () => fetchEventRecordsTab1(userId, pageNumber),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

// Event Recharge Records Query
export const useRechargeRecordsTab1 = (userId, pageNumber = 1) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["rechargeRecordsTab1", userId, pageNumber],
    queryFn: () => fetchRechargeRecordsTab1(userId, pageNumber),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

// Event Winners Query
export const useWinnersDataTab1 = () => {
  return useQuery({
    queryKey: ["winnersDataTab1"],
    queryFn: () => fetchWinnersDataTab1(),
  });
};

// Event Leaderboard Today Query
export const useLeaderboardTodayTab1 = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["leaderboardTodayTab1"],
    queryFn: () => fetchLeaderboardTodayTab1(),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

// Event Leaderboard Previous Day Query
export const useLeaderboardPreviousDayTab1 = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["leaderboardPreviousDayTab1"],
    queryFn: () => fetchLeaderboardPreviousDayTab1(),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
