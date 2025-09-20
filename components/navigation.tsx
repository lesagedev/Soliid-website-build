"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {Menu, X, Phone, Mail, Download, ArrowRight} from "lucide-react"
import { useTally } from "@/hooks/useTally"
import QuoteButton from "@/components/quote-button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { openPopup } = useTally('waWV4W') // Utilisation du nouveau hook avec le formId

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openPopup({
      layout: 'modal',
      width: 600,
      hideTitle: false,
      overlay: true,
      hiddenFields: {
        source: 'navigation',
        page: pathname,
        ref: 'quote_request'
      }
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const getLinkClasses = (href: string) => {
    const baseClasses = "transition-colors font-medium"
    const activeClasses = "text-primary border-b-1 border-primary"
    const inactiveClasses = "text-foreground hover:text-primary"

    return `${baseClasses} ${isActiveLink(href) ? activeClasses : inactiveClasses}`
  }

  const getMobileLinkClasses = (href: string) => {
    const baseClasses = "transition-colors font-medium py-2"
    const activeClasses = "text-primary bg-primary/10 px-3 rounded-md"
    const inactiveClasses = "text-foreground hover:text-primary"

    return `${baseClasses} ${isActiveLink(href) ? activeClasses : inactiveClasses}`
  }

  return (
    <nav
      className={`bg-white/80 backdrop-blur-md shadow-sm border-b border-border/50 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md bg-white/50 backdrop-blur-sm border-border/70" : ""
      }`}
    >
      {/* Top bar with contact info */}
      <div className={`bg-muted/60 backdrop-blur-sm transition-all duration-300 ${isScrolled ? "py-1" : "py-2"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>+237 675 887 676</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>contact@buildermats.com</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span>Construire facile au Cameroun</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? "h-14" : "h-16"}`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/logo-soliid.png"
              alt="Soliid Logo"
              width={120}
              height={40}
              className={`w-auto transition-all duration-300 ${isScrolled ? "h-8" : "h-10"}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={getLinkClasses("/")}>
              Accueil
            </Link>
            <Link href="/parpaings" className={getLinkClasses("/parpaings")}>
              Parpaings
            </Link>
            <Link href="/paves" className={getLinkClasses("/paves")}>
              Pavés
            </Link>
            <Link href="/bordures" className={getLinkClasses("/bordures")}>
              Bordures
            </Link>

            <Link
              href="/ressources"
              className={`
                ${getLinkClasses("/ressources")}
                group relative overflow-hidden
                hover:animate-pulse
                transform
                transition-all duration-300 ease-in-out
                before:absolute before:inset-0 before:bg-gradient-to-r
                before:from-primary/10 before:to-transparent
                before:opacity-0 before:hover:opacity-100
                before:transition-opacity before:duration-300
                before:rounded-md before:-z-10
              `}
            >
              <span className="relative flex items-center gap-2">
                <Download className="h-4 w-4 animate-bounce transition-all duration-300 text-primary" />
                <span className="relative">
                  Ressources
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </span>
              </span>
            </Link>

            <Link href="/contact" className={getLinkClasses("/contact")}>
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <QuoteButton className={`bg-primary hover:bg-primary/90 cursor-pointer text-primary-foreground transition-all duration-300 ${
              isScrolled ? "h-9 text-sm" : "h-10"
            }`}>
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </QuoteButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <Link href="/" className={getMobileLinkClasses("/")} onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
              <Link
                href="/parpaings"
                className={getMobileLinkClasses("/parpaings")}
                onClick={() => setIsMenuOpen(false)}
              >
                Parpaings
              </Link>
              <Link href="/paves" className={getMobileLinkClasses("/paves")} onClick={() => setIsMenuOpen(false)}>
                Pavés
              </Link>
              <Link href="/bordures" className={getMobileLinkClasses("/bordures")} onClick={() => setIsMenuOpen(false)}>
                Bordures
              </Link>

              <Link
                href="/ressources"
                className={`
                  ${getMobileLinkClasses("/ressources")}
                  group flex items-center gap-2
                  hover:animate-pulse
                  transform
                  transition-all duration-300 ease-in-out
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                <Download className="h-4 w-4 text-primary animate-bounce transition-all duration-300" />
                Ressources
              </Link>

              <Link href="/contact" className={getMobileLinkClasses("/contact")} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Button
                onClick={(e) => {
                  handleQuoteClick(e)
                  setIsMenuOpen(false)
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
              >
                Demander un devis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
