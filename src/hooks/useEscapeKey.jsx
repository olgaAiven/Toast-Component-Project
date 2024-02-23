import React from "react";

export default function useEscapeKey(callBack) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        console.log("Escape");
        callBack();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callBack]);
}
