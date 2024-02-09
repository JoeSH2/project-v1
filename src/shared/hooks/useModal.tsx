import { useCallback, useEffect, useState } from 'react';

export function useModal(onClose: () => void, isOpen: boolean) {
  const [isMounted, setIsMounted] = useState(false);
  const keyCloseModal = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', keyCloseModal);

    return () => {
      window.removeEventListener('keydown', keyCloseModal);
    };
  }, [keyCloseModal, onClose]);

  return { isMounted };
}
