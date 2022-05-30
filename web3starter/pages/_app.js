
import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://dmvfvwwdkhsc.usemoralis.com:2053/server"
      appId="6Y7WQAvY6OeeI9aahOd8fz7ZQgjbR6Nz3fRO32xA"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;