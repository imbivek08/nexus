import { auth, signIn } from "@/lib/auth";
import React from "react";
import styles from "./LoginPage.module.css";
import LoginForm from "@/components/formState/LoginForm";
const LoginPage = async () => {
  const session = auth();
  const handSignin = async () => {
    "use server";
    await signIn("github");
  };
  return (
    <div className={styles.container}>
      <div className={styles.handler}>
        <h1>Login</h1>
        <LoginForm />
        <form action={handSignin} className={styles.providers}>
          <button>GitHub</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
