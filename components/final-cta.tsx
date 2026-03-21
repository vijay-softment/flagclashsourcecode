"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { useCountry } from "@/contexts/country-context"

export function FinalCta() {
  const { price, buyLink, isLoading } = useCountry()
  return (
    <section className="relative py-12 sm:py-16">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm sm:p-12">
          <Badge
            variant="outline"
            className="mb-4 border-accent/30 bg-accent/10 px-4 py-1.5 text-accent"
          >
            Ready to Launch?
          </Badge>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Start Building Your Flag Battle Experience Today
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Get the complete source code package with video call support. Skip the development 
            hurdles and launch your project with confidence.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="w-full gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              <a href={buyLink} target="_blank" rel="noopener noreferrer">
                {isLoading ? "Buy Now" : `Buy Now - ${price}`}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Digital delivery • Video call support included • Email support available
          </p>
        </div>
      </div>
    </section>
  )
}
