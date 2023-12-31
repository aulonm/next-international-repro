import { getI18n, getScopedI18n } from "../../locales/app/server";

// Only needed for SSG
// export const generateStaticParams = getStaticParams();

export default async function Home() {
  const t = await getI18n();
  const t2 = await getScopedI18n("scope.more");

  return (
    <div>
      <h1>APP-dir</h1>
      <p>Hello: {t("hello")}</p>
      <p>
        Hello:{" "}
        {t("welcome", {
          name: "John",
        })}
      </p>
      <p>
        Hello (with React components):{" "}
        {t("welcome", {
          name: <strong>John</strong>,
        })}
      </p>
      <p>
        Hello:{" "}
        {t("about.you", {
          age: "23",
          name: "Doe",
        })}
      </p>
      <p>
        Hello (with React components):{" "}
        {t("about.you", {
          age: <strong>23</strong>,
          name: "Doe",
        })}
      </p>
      <p>{t2("test")}</p>
      <p>
        {t2("param", {
          param: "test",
        })}
      </p>
      <p>
        {t2("param", {
          param: <strong>test</strong>,
        })}
      </p>
      <p>{t2("and.more.test")}</p>
      <p>{t("missing.translation.in.fr")}</p>
      <p>
        {t("cows", {
          count: 1,
        })}
      </p>
      <p>
        {t("cows", {
          count: 2,
        })}
      </p>
      <p>
        {t2("stars", {
          count: 1,
        })}
      </p>
      <p>
        {t2("stars", {
          count: 2,
        })}
      </p>
    </div>
  );
}
