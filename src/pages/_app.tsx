import { ThemeProvider } from "@/contexts/theme";
import type { AppProps } from "next/app";
import { globalStyles } from "../styles/globals";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
