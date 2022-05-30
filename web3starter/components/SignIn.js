

import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";

import { useState } from "react";

export default function SignIn() {
  const { authenticate, isAuthenticated, authError, isAuthenticating } =
    useMoralis();

  const [email, setEmail] = useState("rayyan@moralis.io");

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "magicLink",
      email: email,
      apiKey: "pk_test_7967AF810E630E08",
      network: "kovan",
    });
  };

  return (
    <div className={styles.card}>

      {isAuthenticating && <p className={styles.green}>Authenticating</p>}
      {authError && (
        <p className={styles.error}>{JSON.stringify(authError.message)}</p>
      )}
      <div className={styles.buttonCard}>
        <input
          type={"email"}
          className={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button className={styles.loginButton} onClick={handleCustomLogin}>
          Login with Magic Link
        </button>
      </div>
    </div>
  );
}