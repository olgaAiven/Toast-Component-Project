import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [messageList, setMessageList] = React.useState([]);

  const handleEsc = React.useCallback(() => {
    setMessageList([]);
  }, []);

  useEscapeKey(() => {
    handleEsc();
  });

  function createMessage({ message, variant }) {
    const toast = {
      variant,
      message,
      id: Math.random().toString(16).slice(2),
    };

    const updMessageList = [...messageList, toast];

    setMessageList(updMessageList);
  }

  function dismissToast(id) {
    const updMessageList = [...messageList].filter((item) => {
      return item.id !== id;
    });
    setMessageList(updMessageList);
  }

  return (
    <ToastContext.Provider
      value={{
        messageList,
        createMessage,
        dismissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
