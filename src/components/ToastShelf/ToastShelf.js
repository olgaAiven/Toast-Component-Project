import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { messageList, dismissToast } = React.useContext(ToastContext);

  //const [toasts, setToasts] = React.useState(messageList);

  // React.useEffect(() => {
  //   setToasts(messageList);
  // }, [messageList]);

  function onDismissHandler(id) {
    // const updMessageList = [...toasts].filter((item) => {
    //   return item.id !== id;
    // });
    // setToasts(updMessageList);
    // setMessageList(updMessageList);
  }

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {messageList.map(({ variant, message, id }, i) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              variant={variant ? variant : "notice"}
              onCloseClick={() => {
                dismissToast(id);
              }}
            >
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
