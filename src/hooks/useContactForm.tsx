import { useState, useCallback } from 'react';

export const useContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = useCallback(() => {
    setIsOpen(true);
    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden';
  }, []);

  const closeForm = useCallback(() => {
    setIsOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  return {
    isOpen,
    openForm,
    closeForm
  };
}; 