import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Video, Settings, Tv } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full Source Code",
    description: "Complete Flag Clash project files ready to customize and deploy",
  },
  {
    icon: Video,
    title: "Video Call Support",
    description: "Personal guidance via video call for setup and questions",
  },
  {
    icon: Settings,
    title: "Easy Setup Assistance",
    description: "Step-by-step help to get you up and running quickly",
  },
  {
    icon: Tv,
    title: "Stream Ready",
    description: "Perfect for YouTube live streams and interactive content",
  },
]

export function ProductHighlight() {
  return (
    <section id="features" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-border bg-secondary/50 px-4 py-1.5 text-muted-foreground"
          >
            What You're Getting
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Launch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete package designed to get you from zero to launch with confidence
          </p>
        </div>

        {/* Premium product card */}
        <Card className="relative mx-auto mt-12 max-w-4xl overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
          <CardContent className="relative p-8 sm:p-12">
            <div className="grid gap-8 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="mt-10 flex items-center justify-center gap-3 border-t border-border/50 pt-8">
              <Badge className="bg-accent/10 text-accent hover:bg-accent/20">Source Code Access</Badge>
              <Badge className="bg-secondary text-foreground hover:bg-secondary/80">Support Included</Badge>
              <Badge className="bg-secondary text-foreground hover:bg-secondary/80">Digital Product</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
