import React, { useCallback, useEffect, useState } from "react";
type ScrollValue = {
  scrollY: number;
};
type ScrollObserverProps = {
  children: React.ReactNode; // Define the children prop
};
export const ScrollContext = React.createContext<ScrollValue>({ scrollY: 0 });

const ScrollObserver: React.FC<ScrollObserverProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
