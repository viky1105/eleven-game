import { useEffect, useState } from "react";

export default function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

function calcTimeLeft(target) {
  const now = new Date().getTime();
  const distance = new Date(target).getTime() - now;
  if (distance <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const m = Math.floor((distance / (1000 * 60)) % 60);
  const s = Math.floor((distance / 1000) % 60);
  return { d, h, m, s };
}
