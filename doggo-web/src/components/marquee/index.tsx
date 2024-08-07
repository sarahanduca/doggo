import { FC, ReactNode } from "react";

import styles from "./marquee.module.css";

export const Marquee: FC<{ children: string | ReactNode }> = ({ children }) => {
  return (
    <div className={styles.marquee}>
      <p>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </p>
    </div>
  );
};
