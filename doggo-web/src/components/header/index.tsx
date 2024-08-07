import { FC } from "react";

import { DoggoLogo } from "../../assets/icons/doggoLogo";
import { Button } from "../button";

import styles from "./header.module.css";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <i className={styles.logo}>
        <DoggoLogo />
      </i>

      <h2>DOGGO</h2>

      <section className={styles.headerButtons}>
        <Link to="/login">Login</Link>
        <Button>
          <Link to="/criar-conta">Criar conta</Link>
        </Button>
      </section>
    </header>
  );
};
