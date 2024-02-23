import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastProvider({ children }) {
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );
  const [message, setMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState([]);

  useEscapeKey(() => {
    setMessageList([]);
  });

  return (
    <ToastContext.Provider
      value={{
        selectedVariant,
        setSelectedVariant,
        message,
        setMessage,
        messageList,
        setMessageList,
        VARIANT_OPTIONS,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
