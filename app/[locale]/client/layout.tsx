"use client";

import { ReactNode } from "react";
import { I18nProviderClient } from "../../../locales/app/client";
import en from "../../../locales/en";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <I18nProviderClient
      locale={"en"}
      fallback={<p> Loading...</p>}
      fallbackLocale={en}
    >
      {children}
    </I18nProviderClient>
  );
}
