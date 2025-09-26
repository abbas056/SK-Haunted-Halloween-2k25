import { useQuery } from "@tanstack/react-query";
import {
  fetchLeaderboardSentTodayTab2,
  fetchLeaderboardReceivedTodayTab2,
  fetchLeaderboardReceivedPrevTab2,
  fetchLeaderboardSentPrevTab2,
  fetchStreamTab2,
} from "../api/tab2Api";

// Event Leaderboard Today Query
export const useSentLeaderboardTodayTab2 = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["sentLeaderboardTodayTab2"],
    queryFn: () => fetchLeaderboardSentTodayTab2(),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

// Event Leaderboard Today Query
export const useSentLeaderboardPrevTab2 = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["sentLeaderboardPrevTab2"],
    queryFn: () => fetchLeaderboardSentPrevTab2(),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

// Event Leaderboard Today Query
export const useReceivedLeaderboardTodayTab2 = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["receivedLeaderboardTodayTab2"],
    queryFn: () => fetchLeaderboardReceivedTodayTab2(),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

// Event Leaderboard Prev Query
export const useReceivedLeaderboardPrevTab2 = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["receivedLeaderboardPrevTab2"],
    queryFn: () => fetchLeaderboardReceivedPrevTab2(),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export const useStreamTab2 = () => {
  const { data, isError, error } = useQuery({
    queryKey: ["streamTab2"],
    queryFn: () => fetchStreamTab2(),
  });
  return {
    data,
    isError,
    error,
  };
};
