import { useEffect, useRef } from "react";

const useFontsLoaded = (callback: () => void) => {
  const savedCallback = useRef<typeof callback>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function runCallback() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    if (typeof document !== "undefined") {
      document.fonts.ready.then(runCallback);
    }
  }, []);
};

export default useFontsLoaded;
