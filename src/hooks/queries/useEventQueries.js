import { useQuery } from "@tanstack/react-query";
import {
  fetchEventLeaderboardTalentsOverall,
  fetchEventLeaderboardTalentsToday,
  fetchEventLeaderboardTalentsPreviousDay,
  fetchEventLeaderboardGiftersOverall,
  fetchEventLeaderboardGiftersToday,
  fetchEventLeaderboardGiftersPreviousDay,
} from "../api/eventApi";

// Event Leaderboard Query Overall
export const useEventLeaderboardTalentsOverall = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["eventLeaderboardTalentsOverall"],
    queryFn: () => fetchEventLeaderboardTalentsOverall(),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

// Event Leaderboard Query Today
export const useEventLeaderboardTalentsToday = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["eventLeaderboardTalentsToday"],
    queryFn: () => fetchEventLeaderboardTalentsToday(),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

// Event Leaderboard Query Previous Day
export const useEventLeaderboardTalentsPreviousDay = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["eventLeaderboardTalentsPreviousDay"],
    queryFn: () => fetchEventLeaderboardTalentsPreviousDay(),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

// Event Leaderboard Query Gifters Overall
export const useEventLeaderboardGiftersOverall = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["eventLeaderboardGiftersOverall"],
    queryFn: () => fetchEventLeaderboardGiftersOverall(),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

// Event Leaderboard Query Gifters Today
export const useEventLeaderboardGiftersToday = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["eventLeaderboardGiftersToday"],
    queryFn: () => fetchEventLeaderboardGiftersToday(),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

// Event Leaderboard Query Gifters Previous Day
export const useEventLeaderboardGiftersPreviousDay = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["eventLeaderboardGiftersPreviousDay"],
    queryFn: () => fetchEventLeaderboardGiftersPreviousDay(),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
