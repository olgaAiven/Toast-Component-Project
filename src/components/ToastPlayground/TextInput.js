import React from "react";

import styles from "./ToastPlayground.module.css";

export default function TextInput({ onChangeHandler }) {
  const [selectedVariant, setSelectedVariant] = React.useState("");

  return (
    <div className={styles.row}>
      <label
        htmlFor="message"
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id="message"
          className={styles.messageInput}
          value={selectedVariant}
          onChange={(event) => {
            setSelectedVariant(event.target.value);
            onChangeHandler(event.target.value);
          }}
        />
      </div>
    </div>
  );
}
