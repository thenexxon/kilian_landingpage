import React from "react";
import Logo from "@/components/Logo";

export const metadata = {
  title: "AGB - Kilian KryptoMaster",
  description: "Terms and Conditions for Kilian Kropiunik Enterprise LLC",
};

export default function AGB() {
  return (
    <main className="min-h-screen bg-background">
      <Logo />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-[720px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient-silver mb-8">
            Allgemeine Geschäftsbedingungen
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-red-400 mb-2">
                  ⚠️ Wichtiger Risikohinweis
                </h3>
                <p className="text-red-300 text-sm">
                  <strong>Trading birgt ein hohes Risiko und kann zum Totalverlust 
                  der Erstinvestition führen.</strong>
                </p>
              </div>
              
              <div className="text-gray-300 leading-relaxed mb-4">
                <p className="mb-4">
                  <strong className="text-white">Kilian Kropiunik Enterprise LLC</strong><br />
                  3833 POWERLINE RD SUITE 201<br />
                  FORT LAUDERDALE, FL. US 33309<br />
                  E-Mail: kiliankropiunik1@gmail.com
                </p>
                <p className="text-sm text-gray-400">Gültig ab: 03/2025</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                § 1 Geltungsbereich und Vertragspartner
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen 
                  mit Unternehmern. Sie gelten ausschließlich gegenüber Geschäftskunden, 
                  nicht gegenüber Verbrauchern.
                </p>
                <p className="mb-4">
                  Der Vertrag wird in deutscher Sprache geschlossen. Individuelle 
                  Vereinbarungen haben Vorrang vor diesen Bedingungen.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                § 2 Vertragsgegenstand und -abschluss
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Wir bieten online-basierte Beratungsdienstleistungen für Trading-Strategien, 
                  insbesondere im Bereich Kryptowährungen.
                </p>
                <p className="mb-4">
                  Verträge werden über die Plattformen Copecart oder Ablefy abgeschlossen. 
                  Es besteht keine Garantie für bestimmte Ergebnisse.
                </p>
                <p className="mb-4">
                  Das Unternehmen behält sich das Recht vor, die Servicedetails zu bestimmen.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                § 3 Preise und Zahlung
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Die Preise verstehen sich netto zuzüglich Mehrwertsteuer und sind 
                  in Euro zu zahlen. Die Zahlung ist sofort nach Vertragsschluss und 
                  Rechnungsstellung fällig.
                </p>
                <p className="mb-4">
                  Der Zugang zum Mitgliederbereich ist abhängig von der vorherigen Zahlung. 
                  Eine PDF-Rechnung wird zugesandt.
                </p>
                <p className="mb-4">
                  <strong className="text-white">Akzeptierte Zahlungsmethoden:</strong>
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>SEPA-Lastschrift</li>
                  <li>PayPal</li>
                  <li>Klarna</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                § 4 Vertragslaufzeit und Kündigung
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  <strong className="text-white">Mindestvertragslaufzeiten:</strong>
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li><strong>&quot;Krypto Masterclass - Gold&quot;:</strong> 12 Monate</li>
                  <li><strong>&quot;Krypto Masterclass - Silber&quot;:</strong> 6 Monate</li>
                </ul>
                <p className="mb-4">
                  Eine ordentliche Kündigung während der Vertragslaufzeit ist nicht möglich. 
                  Außerordentliche Kündigung ist bei besonderen Gründen möglich.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                § 5 Mitwirkungspflichten des Kunden
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Der Kunde muss erforderliche Handlungen durchführen, sich an der 
                  Kommunikation beteiligen und bereitgestellte Strategien umsetzen.
                </p>
                <p className="mb-4">
                  Bei Zahlungsverzug können die Dienstleistungen ausgesetzt werden.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                § 6 Gewährleistung und Einschränkungen
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Es werden keine garantierten Ergebnisse zugesichert. Der Kunde muss 
                  Probleme innerhalb von 7 Werktagen melden.
                </p>
                <p className="mb-4">
                  <strong className="text-white">Risikoanerkennung:</strong> Der Kunde 
                  erkennt die hohen Trading-Risiken an.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                § 7 Haftung
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Die Haftung ist für verschiedene Szenarien begrenzt. Es besteht 
                  keine Haftung für Trading-Verluste.
                </p>
                <p className="mb-4">
                  Wir empfehlen eine unabhängige Marktanalyse vor jeder Investition.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                § 8 Geistiges Eigentum
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Alle Urheberrechte und geistigen Eigentumsrechte bleiben vorbehalten. 
                  Eine Weiterverbreitung der Inhalte ist untersagt.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                § 9 Anwendbares Recht
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                § 10 Gerichtsstand
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Gerichtsstand für alle Streitigkeiten ist der Ort des Kunden.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Wichtige Kontaktinformationen
                </h3>
                <div className="text-gray-300 text-sm">
                  <p className="mb-2">
                    <strong>Kilian Kropiunik Enterprise LLC</strong>
                  </p>
                  <p className="mb-2">3833 POWERLINE RD SUITE 201</p>
                  <p className="mb-2">FORT LAUDERDALE, FL. US 33309</p>
                  <p className="mb-2">E-Mail: kiliankropiunik1@gmail.com</p>
                  <p className="text-gray-400">Gültigkeitsdatum: 03/2025</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}