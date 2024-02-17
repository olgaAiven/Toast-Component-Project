import React from "react";

import Button from "../Button";
import RadioInput from "./RadioInput";
import TextInput from "./TextInput";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [selectedVariant, setSelectedVariant] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleVariantSelect = (variant) => {
    console.log({ variant });
    setSelectedVariant(variant);
  };

  const handleMessageChange = (message) => {
    console.log({ message });
    setMessage(message);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <TextInput onChangeHandler={handleMessageChange} />
        <RadioInput options={VARIANT_OPTIONS} onSelect={handleVariantSelect} />
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
