import { FC, ReactNode } from "react";

import styles from "./button.module.css";

export const Button: FC<{ children: string | ReactNode }> = ({ children }) => {
  return <button className={styles.buttonContainer}>{children}</button>;
};
