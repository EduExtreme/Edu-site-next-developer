import type { AppProps } from "next/app";
import { globalStyles } from "../styles/globals";
import { ThemeProvider } from "@/contexts/theme";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
