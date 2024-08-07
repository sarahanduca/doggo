import { FC } from "react";

import styles from "./input.module.css";

export const Input: FC<{ name: string; label: string }> = ({ name, label }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} id={name} />
    </div>
  );
};
