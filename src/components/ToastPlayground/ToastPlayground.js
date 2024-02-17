import React from "react";

import Button from "../Button";
import RadioInput from "./RadioInput";
import TextInput from "./TextInput";
import ToastShelf from "../ToastShelf";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

export const MessageListContext = React.createContext();

function ToastPlayground() {
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );
  const [message, setMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState([]);
  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
  };

  const handleMessageChange = (message) => {
    setMessage(message);
  };

  const handleMessageListUpdate = (list) => {
    setMessageList(list);
  };

  function handlePopToast(event) {
    event.preventDefault();
    const toast = {
      variant: selectedVariant,
      message,
      id: Math.random().toString(16).slice(2),
    };
    setMessageList((prevMessageList) => [...prevMessageList, toast]);
    setMessage("");
    setSelectedVariant(VARIANT_OPTIONS[0]);
  }
  //TODO: onSubmit radio input has strange default val, it should be set to notice
  return (
    <MessageListContext.Provider value={messageList}>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>
        <ToastShelf
          toastList={messageList}
          onListChange={handleMessageListUpdate}
        />
        <div className={styles.controlsWrapper}>
          <form
            onSubmit={(e) => {
              handlePopToast(e);
            }}
          >
            <TextInput onChangeHandler={handleMessageChange} value={message} />
            <RadioInput
              options={VARIANT_OPTIONS}
              onSelect={handleVariantSelect}
              value={selectedVariant}
            />
            <div className={styles.row}>
              <div className={styles.label} />
              <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                <Button type="submit">Pop Toast!</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MessageListContext.Provider>
  );
}

export default ToastPlayground;
