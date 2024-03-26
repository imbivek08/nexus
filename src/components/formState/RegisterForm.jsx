"use client";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import styles from "./FormState.module.css";
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  console.log(state);
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form className={styles.forms} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="eamil" placeholder="email" name="email" />
      <div>
        <input name="password" type="password" placeholder="password" />
      </div>
      <div>
        <input
          name="passwordRepeat"
          type="password"
          placeholder="Re-enter the password"
        />
      </div>
      <button>Register</button>
      {state?.error}
    </form>
  );
};

export default RegisterForm;
