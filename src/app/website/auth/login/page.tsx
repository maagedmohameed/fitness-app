
import { useTranslations } from "use-intl";
import LoginForm from "./_components/LoginForm";

export default function Login() {
  const t = useTranslations("register.info");

  return (
    <section className="m-auto w-full h-full pb-5 flex flex-col items-center justify-center">
      {/* Login intro heading. */}
      <div className="px-2 py-4 text-center font-baloothambi2">
        <p className="text-[clamp(1rem,2vw,1.5rem)] leading-[clamp(1.5rem,3vw,2.5rem)]">
          {t("hey-there")}
        </p>

        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold">
          {t("welcome-back")}
        </h2>
      </div>

      {/* login form */}
      <LoginForm />
    </section>
  );
}
