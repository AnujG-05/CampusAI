import { Header } from '@/components/header'
import { AnimatedHero } from '@/components/animated-hero'
import { AnimatedFeatureCards } from '@/components/animated-feature-cards'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative">
        <AnimatedHero />
      </main>

      {/* Features Section */}
      <section className="border-t border-border bg-card/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Search Everything
            </h2>
            <p className="text-muted-foreground text-lg">
              Our AI understands context and relevance. Find what you need across multiple content types.
            </p>
          </div>

          <AnimatedFeatureCards />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of students and faculty members using CampusAI to discover knowledge faster.
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors">
              Get Started Free
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8 text-sm text-muted-foreground">
            <p>&copy; 2026 CampusAI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
