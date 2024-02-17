import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastList, onListChange }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    setToasts(toastList);
  }, [toastList]);

  function onDismissHandler(id) {
    const updMessageList = [...toasts].filter((item) => {
      return item.id !== id;
    });
    setToasts(updMessageList);
    onListChange(updMessageList);
  }

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
