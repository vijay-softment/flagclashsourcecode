"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Video, Sparkles, Zap } from "lucide-react"
import { useCountry } from "@/contexts/country-context"

const trustPoints = [
  { icon: Code, label: "Source Code Included" },
  { icon: Video, label: "Video Call Support" },
  { icon: Sparkles, label: "Beginner Friendly" },
  { icon: Zap, label: "Digital Delivery" },
]

export function HeroSection() {
  const { price, buyLink, isLoading } = useCountry()
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16">
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Product badge */}
          <Badge
            variant="outline"
            className="mb-6 border-border bg-secondary/50 px-4 py-1.5 text-muted-foreground"
          >
            Digital Product • Instant Access
          </Badge>

          {/* Main headline */}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Launch Your Own Flag Battle Game{" "}
            <span className="text-accent">Faster</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Get the complete Flag Clash source code package with dedicated video call support. 
            Skip months of development and start building your interactive gaming experience today.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="w-full bg-primary px-8 text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              <a href={buyLink} target="_blank" rel="noopener noreferrer">
                {isLoading ? "Buy Now" : `Buy Now - ${price}`}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const supportSection = document.getElementById("support")
                supportSection?.scrollIntoView({ behavior: "smooth" })
              }}
              className="w-full border-border text-foreground hover:bg-secondary sm:w-auto"
            >
              Contact Support
            </Button>
          </div>

          {/* Trust points */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {trustPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
