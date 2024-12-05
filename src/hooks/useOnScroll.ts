import debounce from "lodash.debounce";
import { useEffect } from "react";

function useOnScroll(callback: () => void, ms = 100) {
  useEffect(() => {
    const debouncedHandleScroll = debounce(callback, ms);

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  });
}

export default useOnScroll;
