import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import useEscapeKey from "../../hooks/useEscapeKey";
function ToastShelf() {
  const { messageList, setMessageList } = React.useContext(ToastContext);

  const [toasts, setToasts] = React.useState(messageList);

  React.useEffect(() => {
    setToasts(messageList);
  }, [messageList]);

  function onDismissHandler(id) {
    const updMessageList = [...toasts].filter((item) => {
      return item.id !== id;
    });
    setToasts(updMessageList);
    setMessageList(updMessageList);
  }

  useEscapeKey(() => {
    setMessageList([]);
  });

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ variant, message, id }, i) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              variant={variant ? variant : "notice"}
              message={message}
              onCloseClick={() => {
                onDismissHandler(id);
              }}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
