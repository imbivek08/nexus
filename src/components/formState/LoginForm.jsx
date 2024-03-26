"use client";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import styles from "./LoginForm.module.css";
import { login } from "@/lib/action";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/");
  }, [state?.success, router]);
  return (
    <form action={formAction} className={styles.cread}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
    </form>
  );
};

export default LoginForm;
