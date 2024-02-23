import React from "react";

import styles from "./ToastPlayground.module.css";

function TextInput({ onChangeHandler, value }) {
  return (
    <div className={styles.row}>
      <label
        htmlFor="message"
        aria-describedby="message"
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id="message"
          className={styles.messageInput}
          value={value}
          onChange={(event) => {
            onChangeHandler(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default React.memo(TextInput);
