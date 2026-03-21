import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Video, MessageCircle } from "lucide-react"

export function SupportSection() {
  return (
    <section id="support" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-border bg-secondary/50 px-4 py-1.5 text-muted-foreground"
          >
            Get in Touch
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Support When You Need It
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {"Have questions before purchasing or need help after? We're here for you."}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary">
                <Mail className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Email Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach out anytime for questions
              </p>
              <a
                href="mailto:support@softment.com"
                className="mt-4 font-medium text-accent transition-colors hover:text-accent/80"
              >
                support@softment.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-accent/30 bg-card/50 backdrop-blur-sm">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/50 bg-accent/10">
                <Video className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Video Call Support</h3>
              <Badge className="mt-2 bg-accent/10 text-accent">Included with Purchase</Badge>
              <p className="mt-3 text-sm text-muted-foreground">
                Personal guidance via video call for setup and customization
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/30 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary">
                <MessageCircle className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Pre-Sale Questions</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Not sure if this is right for you? Contact us anytime to discuss your needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
