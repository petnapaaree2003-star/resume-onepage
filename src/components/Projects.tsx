import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="px-10 py-10 border-b">
      <h2 className="text-lg font-bold tracking-widest mb-8">
        {t("projects.title")}
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-sm">
        <div className="md:col-span-1">
          <p className="font-semibold">{t("projects.position")}</p>
          <p>({t("projects.project")})</p>
          <p className="mt-2">2026</p>
        </div>

        <div className="md:col-span-2 space-y-3 text-gray-700">
          <p>{t("projects.desc1")}</p>
          <p>{t("projects.desc2")}</p>
          <p>{t("projects.desc3")}</p>
          <p>{t("projects.desc4")}</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;