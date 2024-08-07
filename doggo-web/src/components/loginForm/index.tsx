import { FC } from "react";
import { Input } from "../input";

export const LoginForm: FC = () => {
  return (
    <form>
      <Input name="email" label="E-mail" />
    </form>
  );
};
