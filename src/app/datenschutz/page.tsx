import React from "react";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Datenschutzerklärung - Kilian KryptoMaster",
  description: "Privacy Policy for Kilian Kropiunik Enterprise LLC",
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-background">
      <Logo />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-[720px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient-silver mb-8">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              
              <h3 className="text-lg font-semibold text-white mb-3">
                Allgemeine Hinweise
              </h3>
              <div className="text-gray-300 leading-relaxed mb-4">
                <p className="mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit 
                  Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. 
                  Personenbezogene Daten sind alle Daten, mit denen Sie persönlich 
                  identifiziert werden können.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                Datenerfassung auf unserer Website
              </h3>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  <strong className="text-white">Welche Daten erfassen wir?</strong>
                </p>
                <p className="mb-4">
                  Wir erheben folgende personenbezogene Daten:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Name</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer</li>
                  <li>Alter</li>
                  <li>Beruf</li>
                  <li>Website</li>
                  <li>Konsumverhalten</li>
                  <li>Aktuelle Zufriedenheit</li>
                  <li>Gewünschtes Einkommen</li>
                  <li>Bereitschaft zur Investition von Zeit/Geld</li>
                </ul>
                <p className="mb-4">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der 
                  Website zu gewährleisten. Andere Daten können zur Analyse Ihres 
                  Nutzerverhaltens verwendet werden.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                2. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="text-lg font-semibold text-white mb-3">
                Datenschutz
              </h3>
              <div className="text-gray-300 leading-relaxed mb-4">
                <p className="mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten 
                  sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und 
                  entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser 
                  Datenschutzerklärung.
                </p>
                <p className="mb-4">
                  Ihre Daten werden nur so lange gespeichert, wie dies für den jeweiligen 
                  Zweck erforderlich ist. Nach Wegfall des Zwecks werden die Daten 
                  routinemäßig gelöscht.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                Ihre Rechte
              </h3>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Sie haben jederzeit das Recht:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                  <li>Berichtigung, Sperrung oder Löschung Ihrer Daten</li>
                  <li>Ihre Einwilligung jederzeit zu widerrufen</li>
                  <li>sich bei Aufsichtsbehörden zu beschweren</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                3. Datenerfassung auf unserer Website
              </h2>

              <h3 className="text-lg font-semibold text-white mb-3">
                Cookies
              </h3>
              <div className="text-gray-300 leading-relaxed mb-4">
                <p className="mb-4">
                  Die Internetseiten verwenden teilweise so genannte Cookies. Cookies 
                  richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. 
                  Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und 
                  sicherer zu machen.
                </p>
                <p className="mb-4">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von 
                  Cookies informiert werden und Cookies nur im Einzelfall erlauben.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                Server-Log-Dateien
              </h3>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen 
                  in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns 
                  übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                4. Analyse-Tools und Werbung
              </h2>

              <h3 className="text-lg font-semibold text-white mb-3">
                Google Analytics
              </h3>
              <div className="text-gray-300 leading-relaxed mb-4">
                <p className="mb-4">
                  Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. 
                  Anbieter ist die Google Ireland Limited.
                </p>
                <p className="mb-4">
                  Google Analytics verwendet so genannte &quot;Cookies&quot;, die eine Analyse der 
                  Benutzung der Website durch Sie ermöglichen.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                Facebook Pixel
              </h3>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Unsere Website nutzt zur Konversionsmessung das Besucheraktions-Pixel 
                  von Facebook. Anbieter dieses Dienstes ist die Facebook Ireland Ltd.
                </p>
                <p className="mb-4">
                  Das Facebook-Pixel wird für Marketing-Zwecke und zur Analyse der 
                  Website-Performance verwendet.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                5. Newsletter
              </h2>

              <h3 className="text-lg font-semibold text-white mb-3">
                Newsletter­daten
              </h3>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, 
                  benötigen wir von Ihnen eine E-Mail-Adresse. Mit der Anmeldung zum 
                  Newsletter willigen Sie in die Verwendung Ihrer E-Mail-Adresse für 
                  Werbezwecke ein.
                </p>
                <p className="mb-4">
                  Sie können den Newsletter jederzeit über den entsprechenden Link im 
                  Newsletter oder durch entsprechende Mitteilung an uns abbestellen.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                6. Kontakt und rechtliche Grundlagen
              </h2>

              <h3 className="text-lg font-semibold text-white mb-3">
                Verantwortliche Stelle
              </h3>
              <div className="text-gray-300 leading-relaxed mb-4">
                <p className="mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="mb-4">
                  <strong className="text-white">Kilian Kropiunik Enterprise LLC</strong><br />
                  3833 POWERLINE RD SUITE 201<br />
                  FORT LAUDERDALE, FL. US 33309
                </p>
                <p className="mb-4">
                  E-Mail: kiliankropiunik1@gmail.com
                </p>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                Rechtsgrundlage
              </h3>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage 
                  von Art. 6 DSGVO. Wir verarbeiten personenbezogene Daten für Coaching-Zwecke 
                  und zur Kontaktaufnahme.
                </p>
                <p>
                  Diese Datenschutzerklärung dient dem Schutz Ihrer Privatsphäre und 
                  Ihrer Datenrechte.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}