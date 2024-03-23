import { auth, signIn } from "@/lib/auth";
import { Login } from "@/lib/action";
import React from "react";
import styles from "./LoginPage.module.css";
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
        <form action={Login} className={styles.cread}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login</button>
        </form>
        <form action={handSignin} className={styles.providers}>
          <button>GitHub</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
