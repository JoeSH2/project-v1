import React, { useEffect } from 'react';

interface useClickOutsideProps {
  handler: () => void;
  ref: React.MutableRefObject<HTMLElement>;
  value: boolean;
}

export const useClickOutside = ({ handler, ref, value = true }: useClickOutsideProps) => {
  useEffect(() => {
    if (!value) return;

    const handleClick = (e: any) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [handler, ref, value]);
};
