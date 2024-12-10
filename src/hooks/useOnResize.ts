import debounce from "lodash.debounce";
import { useEffect } from "react";

const useOnResize = (callback: () => void, ms = 100) => {
  useEffect(() => {
    const debouncedHandleResize = debounce(callback, ms);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
};

export default useOnResize;
