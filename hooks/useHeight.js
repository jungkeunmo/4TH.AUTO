import { useEffect, useState } from "react";

const useHeight = () => {
  const [height, setHeight] = useState(0);

  const handleResize = () => setHeight(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    setHeight(window.innerHeight);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
};

export default useHeight;