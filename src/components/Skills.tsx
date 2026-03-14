import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="px-10 py-10 border-b">
      <h2 className="text-lg font-bold tracking-widest mb-8">
        {t("skills.title")}
      </h2>

      <div className="grid md:grid-cols-2 gap-12 text-sm">

        <div>
          <h3 className="font-semibold mb-4">
            {t("skills.technical")}
          </h3>

          <ul className="space-y-2 text-gray-700">
            <li>{t("skills.react")}</li>
            <li>{t("skills.typescript")}</li>
            <li>{t("skills.vite")}</li>
            <li>{t("skills.htmlcss")}</li>
            <li>{t("skills.git")}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            {t("skills.soft")}
          </h3>

          <ul className="space-y-2 text-gray-700">
            <li>{t("skills.problem")}</li>
            <li>{t("skills.learning")}</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;