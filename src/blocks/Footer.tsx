import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const footerLinks = [
    { title: "Impressum", href: "/impressum" },
    { title: "Datenschutz", href: "/datenschutz" },
    { title: "AGB", href: "/agb" },
  ];

  return (
    <footer className="relative">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
              <Image
                src="/logo.png"
                width={200}
                height={60}
                alt="Krypto Masterclass logo"
                className="w-[300px] h-auto"
              />
            </Link>
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
