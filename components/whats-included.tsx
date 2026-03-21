import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileCode2, BookOpen, Video, Headphones, FileText, Layers } from "lucide-react"

const items = [
  {
    icon: FileCode2,
    title: "Complete Source Code",
    description:
      "All project files including frontend, backend logic, and assets—fully organized and documented.",
  },
  {
    icon: BookOpen,
    title: "Setup Guidance",
    description:
      "Clear instructions to help you get the project running on your local machine or server.",
  },
  {
    icon: Video,
    title: "Video Call Support",
    description:
      "Schedule a personal video call for hands-on guidance, Q&A, and customization tips.",
  },
  {
    icon: Headphones,
    title: "Technical Assistance",
    description:
      "Get help with basic technical questions and troubleshooting during your setup process.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "Comprehensive documentation covering project structure, configurations, and common modifications.",
  },
  {
    icon: Layers,
    title: "Future-Ready Structure",
    description:
      "Clean, modular architecture designed for easy customization and feature expansion.",
  },
]

export function WhatsIncluded() {
  return (
    <section id="whats-included" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-border bg-secondary/50 px-4 py-1.5 text-muted-foreground"
          >
            Complete Package
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"What's Included"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to launch and customize your Flag Clash experience
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group border-border/50 bg-card/30 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-card/50"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary transition-colors group-hover:border-accent/50 group-hover:bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
