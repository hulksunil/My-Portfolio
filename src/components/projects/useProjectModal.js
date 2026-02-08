import { useCallback, useEffect, useRef, useState } from "react";

const useProjectModal = (projectCount) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeTimeoutRef = useRef(null);

  const openModal = useCallback((index) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setSelectedProjectIndex(index);
    requestAnimationFrame(() => {
      setIsModalVisible(true);
    });
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
    closeTimeoutRef.current = setTimeout(() => {
      setSelectedProjectIndex(null);
      closeTimeoutRef.current = null;
    }, 220);
  }, []);

  const showNextProject = useCallback(() => {
    setSelectedProjectIndex((previousIndex) => {
      if (previousIndex === null) return previousIndex;
      return (previousIndex + 1) % projectCount;
    });
  }, [projectCount]);

  const showPreviousProject = useCallback(() => {
    setSelectedProjectIndex((previousIndex) => {
      if (previousIndex === null) return previousIndex;
      return (previousIndex - 1 + projectCount) % projectCount;
    });
  }, [projectCount]);

  useEffect(() => {
    if (selectedProjectIndex === null) return undefined;

    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
      if (event.key === "ArrowRight") {
        showNextProject();
      }
      if (event.key === "ArrowLeft") {
        showPreviousProject();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [selectedProjectIndex, closeModal, showNextProject, showPreviousProject]);

  useEffect(
    () => () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    },
    []
  );

  return {
    selectedProjectIndex,
    isModalVisible,
    openModal,
    closeModal,
    showNextProject,
    showPreviousProject,
  };
};

export default useProjectModal;
