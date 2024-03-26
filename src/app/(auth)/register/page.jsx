import React from "react";
import styles from "./RegisterPage.module.css";
import RegisterForm from "@/components/formState/RegisterForm";
const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.register}>
        <h1>Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
