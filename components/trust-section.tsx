import { Badge } from "@/components/ui/badge"
import {
  Shield,
  MessageSquare,
  Mail,
  Zap,
  UserCheck,
  FileCheck,
  HeartHandshake,
  Eye,
} from "lucide-react"

const trustPoints = [
  {
    icon: Shield,
    title: "Professional Support",
    description: "Dedicated assistance from experienced developers who know the project inside out.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Straightforward answers to your questions with no unnecessary jargon.",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Reach out anytime via email for pre-sale questions or post-purchase help.",
  },
  {
    icon: Zap,
    title: "Digital Delivery",
    description: "Instant access to your purchase—no waiting, no shipping delays.",
  },
  {
    icon: UserCheck,
    title: "For Serious Buyers",
    description: "Designed for creators and developers committed to building something real.",
  },
  {
    icon: FileCheck,
    title: "Clean Handover",
    description: "Well-organized files and documentation for a smooth transition.",
  },
  {
    icon: HeartHandshake,
    title: "Helpful Onboarding",
    description: "Video call support ensures you understand every aspect of the project.",
  },
  {
    icon: Eye,
    title: "Transparent Offering",
    description: "No hidden fees, no surprises—you know exactly what you're getting.",
  },
]

export function TrustSection() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-border bg-secondary/50 px-4 py-1.5 text-muted-foreground"
          >
            Built on Trust
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Buyers Trust This Product
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A transparent, professional approach to digital product delivery
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-xl border border-border/50 bg-card/20 p-6 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-card/40"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary transition-colors group-hover:border-accent/50">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
