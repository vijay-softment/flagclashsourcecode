"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useCountry } from "@/contexts/country-context"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "What You Get", href: "#whats-included" },
  { label: "Support", href: "#support" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { price, buyLink, isLoading } = useCountry()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/flag-clash-logo.png"
            alt="Flag Clash Logo"
            width={40}
            height={40}
            className="rounded-lg"
            style={{ width: 40, height: 'auto' }}
          />
          <span className="text-lg font-semibold text-foreground">Flag Clash</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href={buyLink} target="_blank" rel="noopener noreferrer">
              {isLoading ? "Buy Now" : `Buy Now - ${price}`}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              <a href={buyLink} target="_blank" rel="noopener noreferrer">
                {isLoading ? "Buy Now" : `Buy Now - ${price}`}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
