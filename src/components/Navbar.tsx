import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lang = e.target.checked ? "th" : "en";
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-[900px] mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-semibold tracking-widest text-sm">
        </h1>

        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:underline">{t("navbar.about")}</a>
          <a href="#projects" className="hover:underline">{t("navbar.experience")}</a>
          <a href="#skills" className="hover:underline">{t("navbar.skills")}</a>
          <a href="#contact" className="hover:underline">{t("navbar.contact")}</a>
        </div>

        {/* Language Toggle */}
        <label className="relative inline-flex items-center cursor-pointer">

          <input
            type="checkbox"
            className="sr-only peer"
            onChange={handleToggle}
          />

          <div className="w-16 h-8 bg-gray-200 rounded-full peer peer-checked:bg-gray-800 transition-colors"></div>

          <span className="absolute left-2 text-xs font-semibold text-gray-700 peer-checked:text-white">
            EN
          </span>

          <span className="absolute right-2 text-xs font-semibold text-gray-700 peer-checked:text-white">
            TH
          </span>

          <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform peer-checked:translate-x-8"></div>

        </label>

      </div>
    </nav>
  );
}

export default Navbar;