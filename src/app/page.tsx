import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Shield } from "lucide-react"
import AnimatedCodeSnippet from "@/components/animated-code-snippet"
import FeatureCard from "@/components/feature-card"
import QuickStart from "@/components/quick-start"
import UsageStats from "@/components/usage-stats"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Seamless Payments Integration with SasaPay SDK</h1>
        <p className="text-xl mb-8">Powerful, flexible, and developer-friendly</p>
        <AnimatedCodeSnippet />
        <Button asChild className="mt-8">
          <Link href="/playground">
            Try it Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

      <section className="py-20 w-full bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code className="h-8 w-8" />}
              title="Easy Integration"
              description="Simple API for quick implementation in your projects"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Lightning Fast"
              description="Optimized for speed and efficiency"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Secure Transactions"
              description="Built-in security measures to protect your payments"
            />
          </div>
        </div>
      </section>

      <QuickStart />
      <UsageStats />
      <Testimonials />
    </div>
  )
}

