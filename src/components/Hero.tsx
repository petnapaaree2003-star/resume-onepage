import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="text-center px-10 pt-16 pb-10 border-b">
      <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] mb-6">
        {t("hero.fullname")}
      </h1>

      <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
        {t("hero.description")}
      </p>
    </section>
  );
}

export default Hero;