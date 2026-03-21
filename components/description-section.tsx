import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Ready-to-use Flag Clash project with clean, well-organized code",
  "Perfect for creators, streamers, and developers building interactive experiences",
  "Saves months of development time with a proven, working foundation",
  "Direct video call support for personalized onboarding and guidance",
  "Comprehensive documentation to understand the project structure",
  "Flexible codebase designed for easy customization and expansion",
]

export function DescriptionSection() {
  return (
    <section className="relative py-12 sm:py-16">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Skip the Development Grind.{" "}
              <span className="text-accent">Start Building Today.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Flag Clash is a complete, production-ready source code package designed for creators 
              who want to launch interactive flag battle experiences without starting from scratch. 
              Whether you're a streamer looking to engage your audience, a developer exploring new 
              project ideas, or an entrepreneur building your next venture—this package gives you 
              the foundation you need.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              What sets this apart is the included video call support. You're not just getting code; 
              you're getting direct access to guidance that helps you understand the project, 
              customize it to your needs, and launch with confidence.
            </p>
          </div>

          {/* Right content - Benefits list */}
          <div className="rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-lg font-semibold text-foreground">
              Why Serious Buyers Choose This Package
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
