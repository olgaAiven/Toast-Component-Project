import React from "react";

import styles from "./ToastPlayground.module.css";
export default function RadioInput({ options, onSelect, value }) {
  const [selectedVariant, setSelectedVariant] = React.useState(value);

  React.useEffect(() => {
    setSelectedVariant(value);
  }, [value]);

  return (
    <div className={styles.row}>
      <div className={styles.label}>Variant</div>
      {options.map((item) => {
        return (
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            key={`variant-${item}`}
          >
            <label htmlFor={`variant-${item}`}>
              <input
                checked={selectedVariant === item}
                id={`variant-${item}`}
                type="radio"
                name="variant"
                value={item}
                onChange={(event) => {
                  setSelectedVariant(event.target.value);
                  onSelect(event.target.value);
                }}
              />
              {item}
            </label>
          </div>
        );
      })}
    </div>
  );
}
