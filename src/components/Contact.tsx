import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="px-10 py-10">
      <h2 className="text-lg font-bold tracking-widest mb-6">
        {t("contact.title")}
      </h2>

      <div className="text-sm space-y-2 text-gray-700">
        <p>
          <span className="font-semibold">{t("contact.phone")}:</span> (+66)90-399-0092
        </p>

        <p>
          <span className="font-semibold">{t("contact.email")}:</span> Petnapaaree8765@gmail.com
        </p>

        <p>
          <span className="font-semibold">{t("contact.address")}:</span> {t("contact.house")}
        </p>
      </div>
    </section>
  );
}

export default Contact;