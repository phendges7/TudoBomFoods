import { useEffect, useState } from 'react';

const OPENING_HOUR = 6;
const CLOSING_HOUR = 20;

function getStatus(now = new Date()) {
  const hour = now.getHours();
  const isOpen = hour >= OPENING_HOUR && hour < CLOSING_HOUR;
  return {
    isOpen,
    label: isOpen
      ? `Aberto agora · até as ${CLOSING_HOUR}h`
      : `Fechado · abrimos às ${OPENING_HOUR}h`,
  };
}

export function useOpeningStatus() {
  const [status, setStatus] = useState(getStatus);

  useEffect(() => {
    const timer = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(timer);
  }, []);

  return status;
}
