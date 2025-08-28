import React from "react";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Impressum - Kilian KryptoMaster",
  description: "Legal Notice for Kilian Kropiunik Enterprise LLC",
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-background">
      <Logo />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-[720px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient-silver mb-8">
            Impressum
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-2">
                  <strong className="text-white">Kilian Kropiunik Enterprise LLC</strong>
                </p>
                <p className="mb-2">3833 POWERLINE RD SUITE 201</p>
                <p className="mb-2">FORT LAUDERDALE, FL. US 33309</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                Kontakt
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-2">E-Mail: kiliankropiunik1@gmail.com</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                Streitschlichtung
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren 
                  vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                Haftung für Inhalte
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte 
                  auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach 
                  §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der 
                  Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu 
                  überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                  Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von 
                  Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
                  Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
                  Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden 
                  von entsprechenden Rechtsverletzungen werden wir diese Inhalte 
                  umgehend entfernen.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                Haftung für Links
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren 
                  Inhalte wir keinen Einfluss haben. Deshalb können wir für diese 
                  fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                  der Seiten verantwortlich.
                </p>
                <p className="mb-4">
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
                  Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt 
                  der Verlinkung nicht erkennbar.
                </p>
                <p>
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch 
                  ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. 
                  Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links 
                  umgehend entfernen.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                Urheberrecht
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen 
                  Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, 
                  Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des 
                  jeweiligen Autors bzw. Erstellers.
                </p>
                <p className="mb-4">
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht 
                  kommerziellen Gebrauch gestattet.
                </p>
                <p>
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, 
                  werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte 
                  Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
                  Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
                  entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                  werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <div className="text-gray-300 leading-relaxed">
                <p className="text-center">© 2024 Kilian Kropiunik</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}