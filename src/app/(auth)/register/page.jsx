"use client";
import React, { useState } from "react";
import styles from "./RegisterPage.module.css";
import Image from "next/image";
import { register } from "@/lib/action";

const RegisterPage = () => {
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [password, setPassword] = useState("");
  //   const [repassord, setRepassword] = useState("");
  //   const togglePasswordVisibility = () => {
  //     setShowPassword(!showPassword);
  //   };

  return (
    <div className={styles.container}>
      <div className={styles.register}>
        <h1>Register</h1>
        <form className={styles.forms} action={register}>
          <input type="text" placeholder="username" name="username" />
          <input type="eamil" placeholder="email" name="email" />
          <div>
            <input name="password" type="password" placeholder="password" />
            {/* <button onClick={togglePasswordVisibility}>Show</button> */}
          </div>
          <div>
            <input
              name="passwordRepeat"
              type="password"
              placeholder="Re-enter the password"
            />
            {/* <button onClick={togglePasswordVisibility}>Show</button> */}
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
