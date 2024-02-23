import React from "react";

import Button from "../Button";
import RadioInput from "./RadioInput";
import TextInput from "./TextInput";
import ToastShelf from "../ToastShelf";
import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const { createMessage } = React.useContext(ToastContext);

  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );

  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
  };

  const handleMessageChange = (message) => {
    setMessage(message);
  };

  function handlePopToast(event) {
    event.preventDefault();
    createMessage({ variant: selectedVariant, message });
    setMessage("");
    setSelectedVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />
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
  );
}

export default ToastPlayground;
