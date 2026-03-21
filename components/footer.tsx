import Image from "next/image"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo and brand */}
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <div className="flex items-center gap-2">
              <Image
                src="/images/flag-clash-logo.png"
                alt="Flag Clash Logo"
                width={36}
                height={36}
                className="rounded-lg"
                style={{ width: 36, height: 'auto' }}
              />
              <span className="text-lg font-semibold text-foreground">Flag Clash</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium digital products with professional support
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <a
              href="mailto:support@softment.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              support@softment.com
            </a>
            <p className="text-xs text-muted-foreground">
              This is a digital product. No physical items will be shipped.
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Flag Clash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
