"use client"

import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h2 className="text-sm tracking-[0.3em] uppercase text-primary font-medium">
              Profile
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg md:text-xl text-foreground font-medium text-pretty">
              Business and Marketing leader with 13+ years of experience driving market entry,
              revenue growth, and go-to-market execution across Europe and Asia.
            </p>

            <p className="text-pretty">
              Proven track record in owning commercial performance, launching platforms from zero,
              scaling multi-country teams, and delivering sustained double- and triple-digit growth
              in B2B digital and SaaS-like environments.
            </p>

            <p className="text-pretty">
              Strong operator with a hands-on leadership style, comfortable with ambiguity, local
              market execution, and HQ alignment. Expert in Customer Success, channel strategy,
              and ecosystem development across Italy, Spain, and broader Southern Europe.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "13+", label: "Years Experience" },
              { value: "22", label: "FTEs Built" },
              { value: "+200%", label: "ARR Growth" },
              { value: "4", label: "Core Markets" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-secondary/50 border border-border/50"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
