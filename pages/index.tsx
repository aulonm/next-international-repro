// pages/index.ts
import { useCallback, useEffect, useState } from "react";
import { useI18n, useScopedI18n } from "../locales/pages";

export default function Page() {
  const t = useI18n();
  const scopedT = useScopedI18n("hello");
  const [state, setState] = useState("");

  const changeState = useCallback(() => {
    setState("loading");
    console.log("state is: ", state);
    console.log(scopedT("world"));
  }, [state, scopedT]);

  useEffect(() => {
    console.log(scopedT("world.welcome", { name: "hei" }));
    setState("dsds");
  }, [scopedT, setState]);

  return (
    <div>
      <p>{t("hello")}</p>

      {/* Both are equivalent: */}
      <p>{t("hello.world")}</p>
      <p>{scopedT("world")}</p>

      <p>{t("welcome", { name: "John" })}</p>
      <p>{t("welcome", { name: <strong>John</strong> })}</p>
    </div>
  );
}
