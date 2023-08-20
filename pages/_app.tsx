import { I18nProvider } from "@/locales/pages";
import en from "@/locales/pages/en";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider locale="en" fallbackLocale={en}>
      <Component {...pageProps} />
    </I18nProvider>
  );
}
