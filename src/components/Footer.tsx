import React from "react";
import Image from "next/image";

function Footer() {
  const footerLinks = [
    { title: "Impressum", href: "#" },
    { title: "Datenschutz", href: "#" },
    { title: "AGB", href: "#" },
  ];

  return (
    <footer className="relative">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/logo.png"
              width={200}
              height={60}
              alt="Krypto Masterclass logo"
              className="w-[300px] h-auto"
            />
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 font-bold"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
