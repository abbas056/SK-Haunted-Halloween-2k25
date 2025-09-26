import { useEffect, useState } from "react";

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

function getTimeLeft(targetDate) {
  const total = new Date(targetDate).getTime() - new Date().getTime();

  if (total <= 0) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor(total / 1000 / 60 / 60);

  return { hours, minutes, seconds };
}

export default useCountdown;
