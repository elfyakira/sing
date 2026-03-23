"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { contact, navigation } from "@/lib/site";

const navItems = navigation.main;
const ctaButton = navigation.cta;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* PC Header */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-[1000] h-20 transition-all duration-300 ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
        style={{
          boxShadow: isScrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="flex items-center justify-between h-full px-10">
          {/* Logo */}
          <Link href="/" className="block">
            <Image
              src="/images/logo.jpg"
              alt="株式会社Sing"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* PC Navigation */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-navy ${
                  pathname === item.href
                    ? "text-navy"
                    : isScrolled
                    ? "text-[#222222]"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {ctaButton.label && (
              <Link
                href={ctaButton.href}
                className="bg-accent text-white px-6 py-2.5 rounded-btn text-[13px] font-semibold transition-colors duration-200 hover:bg-accent-dark ml-6"
              >
                {ctaButton.label}
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* SP Header (fixed) */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-[1000] h-[60px] bg-white"
        style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.06)" }}
      >
        <div className="flex items-center justify-between h-full px-5">
          <Link href="/" className="block">
            <Image
              src="/images/logo.jpg"
              alt="株式会社Sing"
              width={100}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <button
            className="w-11 h-11 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-[#222222] transition-all duration-300 ${
                  isMenuOpen ? "top-[11px] rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-[11px] w-6 h-0.5 bg-[#222222] transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-[#222222] transition-all duration-300 ${
                  isMenuOpen ? "top-[11px] -rotate-45" : "top-[19px]"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[999] bg-black/50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <nav
        className={`lg:hidden fixed top-0 right-0 z-[999] w-[80vw] max-w-[300px] h-full bg-white transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="モバイルナビゲーション"
      >
        <div className="pt-20 px-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-5 text-base font-medium border-b border-[#E8E4DE] transition-colors ${
                pathname === item.href ? "text-navy" : "text-[#222222] hover:text-navy"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block py-5 text-base font-medium text-[#222222] border-b border-[#E8E4DE] transition-colors hover:text-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            お問い合わせ
          </Link>

          {contact.phone && (
            <div className="pt-8">
              <a
                href={`tel:${contact.phoneTel || contact.phone.replace(/-/g, "")}`}
                className="text-sm text-[#5A5A5A]"
              >
                TEL: {contact.phoneFormatted || contact.phone}
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
