"use client";
import { useState, useCallback } from "react";

const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpenChange = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { isOpen, onOpen, onClose, onOpenChange };
};

export default useDisclosure;
