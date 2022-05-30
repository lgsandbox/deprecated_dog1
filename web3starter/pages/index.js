import { useMoralis, useWeb3Transfer } from "react-moralis";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import SignIn from "../Components/SignIn";
import { SignOut } from "../Components/SignOut";

export default function Home() {
  const { authenticate, isAuthenticated, logout, authError, isAuthenticating } =
    useMoralis();

  const [email, setEmail] = useState("");

  const handleCustomLogin = async () => {
    console.log("test login handler");
    await authenticate({
      provider: "magicLink",
      email: email,
      apiKey: "pk_live_CE40324044A3856F",
      network: "ropsten",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundParent}>
        {isAuthenticated ? <SignOut /> : <SignIn />}
      </div>
    </div>
  );
}
