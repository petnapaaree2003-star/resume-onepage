import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="px-10 py-10 border-b">

      <h2 className="text-lg font-bold tracking-widest mb-6">
        {t("about.title")}
      </h2>

      <p>
        <span className="font-semibold">{t("about.name")}:</span> {t("about.surname")}
      </p>

      <p>
        <span className="font-semibold">{t("about.dob")}:</span> {t("about.dateOfBirth")}
      </p>

      <p>
        <span className="font-semibold">{t("about.citizenship")}:</span> {t("about.nationality")}
      </p>

      <p>
        <span className="font-semibold">{t("about.gender")}:</span> {t("about.sex")}
      </p>

    </section>
  );
}

export default About;