import React from "react";

export default function useEscapeKey(handleDismiss) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        console.log("Escape");
        handleDismiss();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDismiss]);
}
