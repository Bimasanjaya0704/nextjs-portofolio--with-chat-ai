"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 pointer-events-none">
      <header
        className={cn(
          "pointer-events-auto relative flex h-14 items-center justify-between px-6 border bg-background/50 backdrop-blur-xl transition-all duration-500 shadow-sm",
          isMenuOpen ? "rounded-3xl" : "rounded-xl",
          scrolled
            ? "shadow-lg border-primary/20 bg-background/80"
            : "border-border/50",
        )}
      >
        <Link href="/" className="flex items-center space-x-2 shrink-0 group">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-primary-foreground group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <Sparkles className="w-4 h-4 fill-current dark:text-black" />
          </div>
          <span className="text-lg font-bold tracking-tight text-primary hidden sm:inline-block">
            Bimsanss
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary relative group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </Link>
          ))}
          <div className="h-4 w-px bg-border/60 mx-1" />
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 text-foreground focus:outline-none hover:bg-muted rounded-full transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 animate-in spin-in-90 duration-300" />
            ) : (
              <Menu className="w-6 h-6 animate-in fade-in duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={cn(
            "md:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-background/95 backdrop-blur-2xl border rounded-3xl transition-all duration-500 ease-in-out overflow-hidden shadow-2xl",
            isMenuOpen
              ? "max-h-96 opacity-100 p-6 translate-y-0 visible"
              : "max-h-0 opacity-0 pointer-events-none -translate-y-4 invisible",
          )}
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium py-2 transition-colors hover:text-primary flex items-center justify-between group border-b border-border/10 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                <div className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" />
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
