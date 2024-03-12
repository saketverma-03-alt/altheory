import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = () => {
  const [activeTab, setActiveTab] = useState(null);
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    product: useRef(null),
    careers: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
         console.log("changed view item",entry.target.id)
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5, // Intersection ratio threshold
    });

    // Observe each section
    for (const ref of Object.values(sectionRefs)) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      // Disconnect the observer when component unmounts
      observer.disconnect();
    };
  }, [sectionRefs]);

  return [activeTab, sectionRefs];
};
