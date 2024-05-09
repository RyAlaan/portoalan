import { useState, useCallback, useLayoutEffect } from "react";

const useResize = (myRef: any) => {
  const [w, setW] = useState<number>(0);
  const [gap, setGap] = useState<number>(0);

  const handleResize = useCallback(() => {
    if (myRef.current) {
      setW(myRef.current.offsetWidth);
      setGap(myRef.current.offsetLeft);
    }
  }, [myRef]);

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef, handleResize]);

  return { w, gap };
};

export default useResize;
